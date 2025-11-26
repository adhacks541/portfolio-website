'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>/?AZ0192';

export default function GlitchText({ text, className = '' }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const scramble = () => {
        let pos = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const scrambled = text.split('')
                .map((char, index) => {
                    if (index < pos) {
                        return text[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join('');

            setDisplayText(scrambled);
            pos += 1 / 3;

            if (pos > text.length) {
                clearInterval(intervalRef.current);
            }
        }, 30);
    };

    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return (
        <motion.span
            className={className}
            onHoverStart={scramble}
            style={{ display: 'inline-block' }} // Ensure hover works properly
        >
            {displayText}
        </motion.span>
    );
}
