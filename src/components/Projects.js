'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';
import HolographicCard from './HolographicCard';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: 'Web3 Security Scanner — 0xSentinel',
        description: 'A comprehensive smart contract vulnerability scanner. Integrates static analysis (Slither/Mythril) with dynamic checks to detect reentrancy, overflow, and logic flaws in Solidity contracts.',
        tech: ['Solidity', 'Python', 'Web3.py', 'Mythril', 'Slither'],
        features: ['Automated vulnerability detection', 'Gas optimization suggestions', 'Detailed audit reports'],
        github: '#',
        link: '#'
    },
    {
        title: 'OSINT Threat Intelligence Dashboard',
        description: 'Real-time threat reconnaissance platform. Aggregates data from Shodan, Whois, and public breach databases to visualize attack surfaces and potential vectors.',
        tech: ['Flask', 'Python', 'Selenium', 'Folium', 'SQLite'],
        features: ['Live attack map', 'Breach data search', 'Domain monitoring'],
        github: '#',
        link: '#'
    },
    {
        title: 'AI-Based Dark Web Monitoring',
        description: 'Automated surveillance system for darknet marketplaces. Uses NLP to scrape and analyze hidden service content for leaked credentials and emerging threats.',
        tech: ['Python', 'Tor', 'NLP', 'Scikit-learn', 'BeautifulSoup'],
        features: ['Tor network scraping', 'Sentiment analysis', 'Alert system'],
        github: '#',
        link: '#'
    },
    {
        title: 'Kidney Disease Prediction Model',
        description: 'High-accuracy diagnostic model using ensemble learning. Optimized for early detection of Chronic Kidney Disease (CKD) with a focus on minimizing false negatives.',
        tech: ['Python', 'Pandas', 'XGBoost', 'Scikit-learn'],
        features: ['Ensemble learning algorithm', 'High sensitivity', 'Medical data visualization'],
        github: 'https://github.com/adhacks541/chronic-kidney-disease-prediction',
        link: 'https://chronic-kidney-disease-prediction-seven.vercel.app/'
    },
    {
        title: 'Intrusion Detection System (IDS)',
        description: 'Network anomaly detection system using deep learning. Analyzes packet flows to identify DDoS attacks and unauthorized access attempts in real-time.',
        tech: ['TensorFlow', 'Keras', 'Python', 'Wireshark'],
        features: ['Real-time packet analysis', 'Deep learning classification', 'Traffic visualization'],
        github: '#',
        link: '#'
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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

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

                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={scaleIn}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <HolographicCard className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <Folder size={40} className={styles.folderIcon} />
                                    <div className={styles.links}>
                                        <div className={styles.linkIcon}>
                                            <Github size={20} />
                                        </div>
                                        <div className={styles.linkIcon}>
                                            <ExternalLink size={20} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                            </HolographicCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
