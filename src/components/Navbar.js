'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, Box, User, Mail, Award, Zap } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
    { name: 'Home', href: '/', icon: <Terminal size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Exp', href: '#experience', icon: <Zap size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Cpu size={18} /> },
    { name: 'Work', href: '#projects', icon: <Box size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <div className={styles.navbar}>
                {/* Top Left Logo */}
                <div className={styles.logoArea}>
                    <Link href="/" className={styles.logo}>
                        <Terminal size={20} />
                        <div>
                            Aditya<span className="text-accent-cyan">.OS</span>
                        </div>
                    </Link>
                </div>

                {/* Bottom Floating Dock (Desktop) */}
                <motion.div
                    className={styles.dockContainer}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                >
                    <nav className={styles.dock}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                            >
                                <span className="mb-1">{link.icon}</span>
                                <span className="text-[10px] uppercase tracking-wide opacity-70">{link.name}</span>
                            </Link>
                        ))}
                    </nav>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link
                                    href={link.href}
                                    className={styles.mobileNavLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-accent-cyan mr-4">0{index + 1}.</span>
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
