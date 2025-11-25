'use client';

import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Web3 Security Scanner — 0xSentinel',
        description: 'A custom Web3 vulnerability scanner integrating blockchain + cybersecurity. Detects high-risk smart contract vulnerabilities with automated static + dynamic checks.',
        tech: ['Solidity', 'Python', 'Web3.py', 'Security Logic'],
        github: '#',
        link: '#'
    },
    {
        title: 'OSINT Threat Intelligence Dashboard',
        description: 'Multi-source OSINT dashboard for real-world threat intelligence research. Features IP lookups, Whois, Shodan-style scanning, and threat visualization.',
        tech: ['Flask', 'Python', 'Selenium', 'Folium', 'SQLite'],
        github: '#',
        link: '#'
    },
    {
        title: 'AI-Based Dark Web Monitoring System',
        description: 'Automated intelligence system for monitoring dark-web sources. Focuses on threat detection and anomaly spotting using AI models.',
        tech: ['Python', 'AI Models', 'Scraping', 'NLP'],
        github: '#',
        link: '#'
    },
    {
        title: 'Kidney Disease Prediction Model',
        description: 'Machine learning model to classify CKD risk. Complete and uploaded to GitHub.',
        tech: ['Python', 'Pandas', 'Sklearn'],
        github: '#',
        link: '#'
    },
    {
        title: 'CanteenConnect',
        description: 'Smart Canteen Management System. Web-based app focusing on automation, ordering, and analytics.',
        tech: ['Web App', 'Automation', 'Analytics'],
        github: '#',
        link: '#'
    },
    {
        title: 'Intrusion Detection System (IDS)',
        description: 'ML models and network packet analysis for early detection of abnormal traffic.',
        tech: ['ML Models', 'Packet Analysis', 'Python'],
        github: '#',
        link: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured <span>Projects</span>
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <Folder size={40} className={styles.folderIcon} />
                                <div className={styles.links}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.tech.map((tech) => (
                                    <span key={tech} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
