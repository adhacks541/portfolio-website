'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Users, Briefcase } from 'lucide-react';
import styles from './Achievements.module.css';

const achievements = [
    {
        title: 'Research Lead',
        organization: 'Cipher Club',
        description: 'Spearheaded cybersecurity research initiatives, mentoring 50+ students in ethical hacking and organizing CTF competitions.',
        icon: <Users size={32} />
    },
    {
        title: 'Security Analyst Intern',
        organization: 'Top Tech Firm',
        description: 'Conducted vulnerability assessments and security audits, identifying critical flaws in production systems.',
        icon: <Briefcase size={32} />
    },
    {
        title: 'National Hackathon Winner',
        organization: 'Smart India Hackathon (Finalist)',
        description: 'Secured top rank in a national-level hackathon for building an AI-driven security solution.',
        icon: <Trophy size={32} />
    },
    {
        title: 'Bug Bounty Researcher',
        organization: 'HackerOne / Bugcrowd',
        description: 'Acknowledged for reporting high-severity vulnerabilities (XSS, SQLi) in major web applications.',
        icon: <Award size={32} />
    }
];



const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Achievements() {
    return (
        <section className={styles.achievements}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Key <span>Achievements</span>
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {achievements.map((achievement) => (
                        <motion.div
                            key={achievement.title}
                            className={`glass-card ${styles.card}`}
                            variants={slideInLeft}
                        >
                            <h3 className={styles.title}>{achievement.title}</h3>
                            <div style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '5px' }}>{achievement.organization}</div>
                            <p className={styles.description}>{achievement.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
