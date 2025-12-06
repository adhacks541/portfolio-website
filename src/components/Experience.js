'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
    {
        title: 'Senior Security Engineer',
        company: 'CyberGuard Solutions',
        period: '2023 - Present',
        description: 'Leading red team operations and developing automated threat detection systems using Python and Go.',
        skills: ['Red Teaming', 'Python', 'Go', 'AWS Security']
    },
    {
        title: 'Full Stack Developer',
        company: 'TechFlow Inc.',
        period: '2021 - 2023',
        description: 'Built scalable web applications with Next.js and Node.js. Implemented secure authentication flows and API rate limiting.',
        skills: ['Next.js', 'Node.js', 'PostgreSQL', 'OAuth2']
    },
    {
        title: 'Security Analyst Intern',
        company: 'SecureNet',
        period: '2020 - 2021',
        description: 'Conducted vulnerability assessments and assisted in incident response procedures.',
        skills: ['Vulnerability Scanning', 'Incident Response', 'Linux']
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work <span>Experience</span>
                </motion.h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.timelineContent}>
                                <div className={styles.header}>
                                    <h3 className={styles.title}>{exp.title}</h3>
                                    <span className={styles.company}>{exp.company}</span>
                                </div>
                                <div className={styles.period}>
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                                <div className={styles.skills}>
                                    {exp.skills.map(skill => (
                                        <span key={skill} className={styles.skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.dot}>
                                <Briefcase size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
