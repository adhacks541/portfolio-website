import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata = {
  title: 'Aditya Singh | SDE × Cybersecurity Hybrid',
  description: 'Portfolio of Aditya Singh - Full-stack Developer & Security Researcher.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
