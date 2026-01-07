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
                >
                    Subject: <span>Aditya Singh</span>
                </motion.h2>

                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.description}>
                        <p>
                            Identity confirmed: Final-year <strong>Computer Science</strong> operative specializing in <strong>Cybersecurity</strong> and <strong>Full-Stack Architecture</strong>. Primary directive: bridging the gap between secure systems and intuitive interfaces.
                        </p>
                        <br />
                        <p>
                            Operations focus on <span className={styles.highlight}>Offensive Security</span>, <span className={styles.highlight}>Smart Contract Auditing</span>, and building resilient <span className={styles.highlight}>Web Infrastructures</span>. I do not just write code; I analyze attack vectors and reinforce digital fortresses.
                        </p>
                        <br />
                        <p>
                            Notable missions include deploying <span className={styles.highlight}>0xSentinel</span> (Web3 Vulnerability Scanner) and architecting <span className={styles.highlight}>OSINT Dashboards</span> for threat intelligence. I engineer technology that is not only functional but inherently secure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
