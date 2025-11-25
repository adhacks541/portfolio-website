'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, Database } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Development',
        icon: <Code2 size={24} />,
        skills: ['Python', 'JavaScript', 'React', 'Next.js', 'Flask', 'C++', 'Solidity', 'HTML/CSS']
    },
    {
        title: 'Security',
        icon: <Shield size={24} />,
        skills: ['OSINT', 'Vulnerability Scanning', 'Bug Hunting', 'Smart Contract Security', 'Threat Intel', 'Nmap', 'Burp Suite']
    },
    {
        title: 'Tools & DevOps',
        icon: <Terminal size={24} />,
        skills: ['Git', 'GitHub Actions', 'Linux', 'Vercel', 'Docker', 'Wireshark', 'Metasploit']
    },
    {
        title: 'AI & Data',
        icon: <Database size={24} />,
        skills: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'OpenAI API', 'SQL', 'Data Analysis']
    }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical <span>Arsenal</span>
                </motion.h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={`glass-card ${styles.category}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>
                                {category.icon}
                                {category.title}
                            </h3>
                            <div className={styles.skillList}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles.skillTag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
