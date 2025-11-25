'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About <span>Me</span>
                </motion.h2>

                <motion.div
                    className={`glass-card ${styles.card}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        I’m a <span className={styles.highlight}>CSE student</span> specializing in the intersection of <span className={styles.highlight}>Software Engineering</span> and <span className={styles.highlight}>Cyber Security</span>.
                        I build AI-driven security tools, Web3 vulnerability scanners, OSINT dashboards, and ML models for real-world problems.
                    </p>
                    <br />
                    <p>
                        I don’t chase keywords — I <span className={styles.highlight}>chase impact</span>. My goal is to become a high-paid SDE × Cybersecurity hybrid who can <span className={styles.highlight}>build and break systems</span> with equal proficiency.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
