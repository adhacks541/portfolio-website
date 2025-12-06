'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>Aditya.Security</h3>
                        <p>Securing the decentralized future, one block at a time.</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:contact@aditya.security" className={styles.socialLink} aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Aditya Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
