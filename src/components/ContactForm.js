'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.heading}>
                        Get in <span>Touch</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Have a project in mind or want to discuss security? Send me a message.
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <User className={styles.icon} size={20} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <Mail className={styles.icon} size={20} />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <MessageSquare className={styles.icon} size={20} style={{ marginTop: '12px' }} />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                className={styles.textarea}
                                rows={5}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${styles.submitBtn} ${submitted ? styles.success : ''}`}
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : submitted ? (
                                'Message Sent!'
                            ) : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
