'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Terminal, Database } from 'lucide-react';
import styles from './Skills.module.css';
import HolographicCard from './HolographicCard';

const skillCategories = [
    {
        title: 'Core Development',
        icon: <Code2 size={24} />,
        skills: [
            { name: 'Python', level: 95 },
            { name: 'JavaScript', level: 90 },
            { name: 'C++', level: 85 },
            { name: 'Solidity', level: 60 },
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'SQL', level: 75 }
        ]
    },
    {
        title: 'Offensive Security',
        icon: <Shield size={24} />,
        skills: [
            { name: 'Penetration Testing', level: 90 },
            { name: 'Smart Contract Auditing', level: 85 },
            { name: 'OSINT', level: 95 },
            { name: 'Burp Suite', level: 85 },
            { name: 'Metasploit', level: 80 },
            { name: 'Nmap', level: 90 },
            { name: 'Wireshark', level: 85 }
        ]
    },
    {
        title: 'AI & Machine Learning',
        icon: <Database size={24} />,
        skills: [
            { name: 'TensorFlow', level: 80 },
            { name: 'PyTorch', level: 75 },
            { name: 'Scikit-learn', level: 85 },
            { name: 'NLP', level: 80 },
            { name: 'Computer Vision', level: 70 },
            { name: 'Pandas', level: 90 },
            { name: 'NumPy', level: 90 }
        ]
    },
    {
        title: 'DevSecOps & Tools',
        icon: <Terminal size={24} />,
        skills: [
            { name: 'Git', level: 95 },
            { name: 'Docker', level: 85 },
            { name: 'Linux', level: 90 },
            { name: 'CI/CD', level: 80 },
            { name: 'AWS', level: 75 },
            { name: 'Vercel', level: 90 }
        ]
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

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical <span>Arsenal</span>
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeInUp}
                        >
                            <HolographicCard className={styles.category}>
                                <h3 className={styles.categoryTitle}>
                                    {category.icon}
                                    {category.title}
                                </h3>
                                <div className={styles.skillList}>
                                    {category.skills.map((skill) => (
                                        <div key={skill.name} className={styles.skillItem}>
                                            <div className={styles.skillInfo}>
                                                <span className={styles.skillName}>{skill.name}</span>
                                                <span className={styles.skillLevel}>{skill.level}%</span>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <motion.div
                                                    className={styles.progressFill}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </HolographicCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
