import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
// Note: Requires RESEND_API_KEY in .env.local
// Used dummy key 're_123' for build time stability if env is missing
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : { emails: { send: async () => ({ error: { message: 'RESEND_API_KEY missing' } }) } };

// Simple in-memory rate limiting (Note: resets on server restart/cold start)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 2; // Allow 2 requests per minute per IP

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // 1. IP Logging & Rate Limiting
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown';
        const now = Date.now();

        console.log(`[CONTACT_API] Request from IP: ${ip} at ${new Date().toISOString()}`);

        if (rateLimitMap.has(ip)) {
            const clientData = rateLimitMap.get(ip);
            if (now - clientData.startTime < RATE_LIMIT_WINDOW) {
                if (clientData.count >= MAX_REQUESTS) {
                    console.warn(`[CONTACT_API] Rate limit exceeded for IP: ${ip}`);
                    return NextResponse.json(
                        { error: 'Too many requests. Please try again later.' },
                        { status: 429 }
                    );
                }
                clientData.count++;
            } else {
                // Reset window
                rateLimitMap.set(ip, { count: 1, startTime: now });
            }
        } else {
            rateLimitMap.set(ip, { count: 1, startTime: now });
        }

        // 2. Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 3. Email Sending (Resend)
        // If API Key is missing, we simulate success but log a warning
        if (!process.env.RESEND_API_KEY) {
            console.warn('[CONTACT_API] RESEND_API_KEY is missing. Email simulation mode.');
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return NextResponse.json({ success: true, message: 'Message sent (SIMULATED)' });
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain in production
            to: 'adityaknowledge541@gmail.com', // Replace with user's actual email or env var
            subject: `Portfolio Contact: ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <hr />
                <p><small>Sent from Portfolio API</small></p>
            `,
            reply_to: email, // Allow direct reply
        });

        if (data.error) {
            console.error('[CONTACT_API] Resend API Error:', data.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('[CONTACT_API] Server Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
