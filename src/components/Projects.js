'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Database, Shield, Radio, Activity, Cpu } from 'lucide-react';
import styles from './Projects.module.css';
import HolographicCard from './HolographicCard';
import ProjectModal from './ProjectModal';

const projects = [
    {
        icon: <Shield size={40} />,
        title: 'Web3 Security Scanner',
        description: 'A comprehensive smart contract vulnerability scanner. Integrates static analysis (Slither/Mythril) with dynamic checks to detect reentrancy, overflow, and logic flaws in Solidity contracts.',
        tech: ['Solidity', 'Python', 'Web3.py', 'Mythril'],
        github: '#',
        link: '#'
    },
    {
        icon: <Database size={40} />,
        title: 'OSINT Threat Dashboard',
        description: 'Real-time threat reconnaissance platform. Aggregates data from Shodan, Whois, and public breach databases to visualize attack surfaces and potential vectors.',
        tech: ['Flask', 'Python', 'Folium', 'SQLite'],
        github: '#',
        link: '#'
    },
    {
        icon: <Radio size={40} />,
        title: 'Dark Web Monitoring',
        description: 'Automated surveillance system for darknet marketplaces. Uses NLP to scrape and analyze hidden service content for leaked credentials and emerging threats.',
        tech: ['Python', 'Tor', 'NLP', 'Scikit-learn'],
        github: '#',
        link: '#'
    },
    {
        icon: <Activity size={40} />,
        title: 'Kidney Disease Prediction',
        description: 'High-accuracy diagnostic model using ensemble learning. Optimized for early detection of Chronic Kidney Disease (CKD) with a focus on minimizing false negatives.',
        tech: ['Python', 'XGBoost', 'Scikit-learn'],
        github: 'https://github.com/adhacks541/chronic-kidney-disease-prediction',
        link: 'https://chronic-kidney-disease-prediction-seven.vercel.app/'
    },
    {
        icon: <Cpu size={40} />,
        title: 'Intrusion Detection System',
        description: 'Network anomaly detection system using deep learning. Analyzes packet flows to identify DDoS attacks and unauthorized access attempts in real-time.',
        tech: ['TensorFlow', 'Keras', 'Python', 'Wireshark'],
        github: '#',
        link: '#'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    System._<span>Projects</span>
                </motion.h2>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            onClick={() => setSelectedProject(project)}
                            className="h-full"
                        >
                            <HolographicCard className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.folderIcon}>
                                        {project.icon || <Folder size={40} />}
                                    </div>
                                    <div className={styles.links}>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} onClick={(e) => e.stopPropagation()}>
                                            <Github size={18} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} onClick={(e) => e.stopPropagation()}>
                                            <ExternalLink size={18} />
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
                            </HolographicCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
