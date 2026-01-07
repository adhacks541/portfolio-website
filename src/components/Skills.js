'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, Database, Cpu, Layers } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Core Architecture',
        icon: <Code2 size={24} />,
        skills: [
            { name: 'Python', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'C++', level: 85 },
            { name: 'Solidity', level: 60 },
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'Node.js', level: 80 }
        ]
    },
    {
        title: 'Security Protocols',
        icon: <Shield size={24} />,
        skills: [
            { name: 'Pentesting', level: 90 },
            { name: 'Smart Contracts', level: 85 },
            { name: 'OSINT', level: 95 },
            { name: 'Burp Suite', level: 85 },
            { name: 'Metasploit', level: 80 },
            { name: 'Nmap', level: 90 }
        ]
    },
    {
        title: 'Neural Networks',
        icon: <Database size={24} />,
        skills: [
            { name: 'TensorFlow', level: 80 },
            { name: 'PyTorch', level: 75 },
            { name: 'NLP', level: 80 },
            { name: 'Computer Vision', level: 70 },
            { name: 'Pandas', level: 90 }
        ]
    },
    {
        title: 'System Operations',
        icon: <Terminal size={24} />,
        skills: [
            { name: 'Git', level: 95 },
            { name: 'Docker', level: 85 },
            { name: 'Linux', level: 90 },
            { name: 'AWS', level: 75 },
            { name: 'Vercel', level: 90 }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const hexVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
};

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Technical <span>Arsenal</span>
                </motion.h2>

                {skillCategories.map((category, catIndex) => (
                    <div key={category.title} className={styles.categoryGroup}>
                        <motion.h3
                            className={styles.categoryTitle}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <span className={styles.categoryIcon}>{category.icon}</span>
                            {category.title}
                        </motion.h3>

                        <motion.div
                            className={styles.hexGrid}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className={styles.hexWrapper}
                                    variants={hexVariants}
                                >
                                    <div className={styles.hexContent}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
