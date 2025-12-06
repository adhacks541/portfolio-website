'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';
import { fadeInUp, scaleIn } from '@/utils/animations';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    About <span>Me</span>
                </motion.h2>

                <motion.div
                    className={`glass-card ${styles.card}`}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <p className={styles.description}>
                        I&apos;m a final-year Computer Science student specializing in <strong>Cybersecurity</strong> and <strong>Full-Stack Development</strong>. My passion lies in bridging the gap between secure systems and intuitive user experiences.
                    </p>
                    <br />
                    <p>
                        My work revolves around <span className={styles.highlight}>Offensive Security</span>, <span className={styles.highlight}>Smart Contract Auditing</span>, and <span className={styles.highlight}>Full-Stack Development</span>. I don&apos;t just write code; I analyze how it can be broken and architect it to withstand attacks.
                    </p>
                    <br />
                    <p>
                        From building <span className={styles.highlight}>0xSentinel</span> (a Web3 vulnerability scanner) to architecting <span className={styles.highlight}>OSINT dashboards</span> for threat intelligence, my goal is to create technology that is not only functional but inherently secure. I chase impact, not just keywords.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
