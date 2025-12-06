'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Link from 'next/link';
import GlitchText from './GlitchText';
import Starfield from './Starfield';
import TypewriterEffect from './TypewriterEffect';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Starfield />

            <div className={styles.content}>
                <motion.span
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Hi, I&apos;m
                </motion.span>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h1 className={styles.name}>
                        <GlitchText text="Aditya Singh" />
                    </h1>
                </motion.div>

                <motion.div
                    className={styles.role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <GlitchText text="SDE" /> <span className={styles.highlight}>×</span> <GlitchText text="Cybersecurity Hybrid" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', height: '3em' }}
                >
                    <TypewriterEffect text="I build AI-driven security tools, Web3 vulnerability scanners, and secure systems." speed={30} delay={1000} />
                </motion.p>

                <motion.div
                    className={styles.ctaButtons}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Link href="#projects">
                        <button className={styles.primaryBtn}>View Work</button>
                    </Link>
                    <Link href="#contact">
                        <button className={styles.secondaryBtn}>Contact Me</button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
