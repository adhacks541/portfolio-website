import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socials}>
                    <a href="https://github.com/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:contact@aditya.singh" className={styles.socialLink}>
                        <Mail size={20} />
                    </a>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Aditya Singh. Built with <span>Next.js</span> & <span>Cyber Security</span>.
                </div>
            </div>
        </footer>
    );
}
