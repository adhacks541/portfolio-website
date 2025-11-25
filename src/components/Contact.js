'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In <span>Touch</span>
                </motion.h2>

                <motion.p
                    className={styles.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                </motion.p>

                <motion.a
                    href="mailto:contact@aditya.singh"
                    className={styles.emailBtn}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Say Hello
                </motion.a>

                <motion.div
                    className={styles.socials}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a href="https://github.com/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Github size={30} />
                    </a>
                    <a href="https://linkedin.com/in/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Linkedin size={30} />
                    </a>
                    <a href="https://twitter.com/adhacks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Twitter size={30} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
