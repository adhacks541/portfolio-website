'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Terminal, check, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.error || 'Transmission failed. Retrying uplink...');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Uplink severed.');
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.heading}>
                        Establish <span>Uplink</span>
                    </h2>
                    <p className={styles.subtitle}>
                        // SECURE_CHANNEL_OPEN:: Send encrypted message...
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <User className={styles.icon} size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="IDENTIFIER (Name)"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                disabled={status === 'submitting'}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <Mail className={styles.icon} size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="CONTACT_ADDRESS (Email)"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                disabled={status === 'submitting'}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <MessageSquare className={styles.icon} size={20} style={{ marginTop: '12px' }} />
                            <textarea
                                name="message"
                                placeholder="DATA_PACKET (Message)"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                className={styles.textarea}
                                rows={5}
                                disabled={status === 'submitting'}
                            />
                        </div>

                        {status === 'error' && (
                            <div style={{ color: '#ff0055', fontFamily: 'monospace', marginTop: '10px', fontSize: '0.9rem' }}>
                                [ERROR]: {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'success'}
                            className={`${styles.submitBtn} ${status === 'success' ? styles.success : ''}`}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Terminal size={18} className="animate-spin" /> Transmitting...
                                </>
                            ) : status === 'success' ? (
                                'Create Success!'
                            ) : (
                                <>
                                    Transmit Data <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
