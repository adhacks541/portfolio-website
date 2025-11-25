'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Users, Briefcase } from 'lucide-react';
import styles from './Achievements.module.css';

const achievements = [
    {
        title: 'Research Co-head',
        organization: 'Cipher Club',
        description: 'Leading research initiatives and organizing cybersecurity events for the college community.',
        icon: <Users size={32} />
    },
    {
        title: 'Cybersecurity Intern',
        organization: 'Industry',
        description: 'Gained hands-on experience in vulnerability assessment and security auditing.',
        icon: <Briefcase size={32} />
    },
    {
        title: 'Hackathon Winner',
        organization: 'Multiple Events',
        description: 'Secured top positions in various coding and security hackathons.',
        icon: <Trophy size={32} />
    },
    {
        title: 'Bug Bounty Hunter',
        organization: 'Independent',
        description: 'Actively reporting vulnerabilities on various platforms and securing web applications.',
        icon: <Award size={32} />
    }
];

export default function Achievements() {
    return (
        <section className={styles.achievements}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Key <span>Achievements</span>
                </motion.h2>

                <div className={styles.grid}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <div style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '5px' }}>{item.organization}</div>
                            <p className={styles.description}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
