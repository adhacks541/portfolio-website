'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code2 } from 'lucide-react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
                    >
                        <button className={styles.closeBtn} onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className={styles.header}>
                            <h2 className={styles.title}>{project.title}</h2>
                            <div className={styles.links}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                    <Github size={18} /> GitHub
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.section}>
                                <h3>Key Features</h3>
                                <ul className={styles.features}>
                                    {project.features && project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                    {!project.features && <li>Advanced security analysis</li>}
                                    {!project.features && <li>Real-time monitoring</li>}
                                    {!project.features && <li>AI-driven insights</li>}
                                </ul>
                            </div>

                            <div className={styles.section}>
                                <h3>Tech Stack</h3>
                                <div className={styles.techStack}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className={styles.techTag}>
                                            <Code2 size={14} /> {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
