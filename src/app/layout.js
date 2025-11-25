import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Aditya Singh | SDE × Cybersecurity Hybrid',
  description: 'Portfolio of Aditya Singh - Full-stack Developer & Security Researcher.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
