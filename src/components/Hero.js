'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Link from 'next/link';
import GlitchText from './GlitchText';
import TypewriterEffect from './TypewriterEffect';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.holoContainer}
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <div className={styles.content}>
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        // SYSTEM.INIT_USER
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h1 className={styles.name}>
                            <GlitchText text="Aditya Singh" />
                        </h1>
                    </motion.div>

                    <motion.div
                        className={styles.role}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <span className="text-accent-cyan">SDE</span>
                        <span className={styles.separator}>//</span>
                        <span className="text-accent-purple">Cybersecurity Hybrid</span>
                    </motion.div>

                    <motion.div
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <TypewriterEffect
                            text="Building the next generation of secure, AI-driven digital infrastructure. Architecting resilient systems for a decentralized future."
                            speed={20}
                            delay={1000}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.ctaButtons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <Link href="#projects" className={styles.primaryBtn}>
                            Initialize Projects
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Establish Comms
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
