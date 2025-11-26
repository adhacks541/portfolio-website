'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootText = [
    "INITIALIZING SYSTEM...",
    "LOADING KERNEL MODULES...",
    "MOUNTING FILE SYSTEMS...",
    "CHECKING SECURITY PROTOCOLS...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING USER DATA...",
    "ACCESS GRANTED."
];

export default function Preloader({ onComplete }) {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textIndex < bootText.length) {
            const timeout = setTimeout(() => {
                setTextIndex(prev => prev + 1);
            }, 400); // Speed of boot sequence
            return () => clearTimeout(timeout);
        } else {
            setTimeout(onComplete, 800); // Wait a bit after "ACCESS GRANTED"
        }
    }, [textIndex, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#000',
                color: '#00ff9d',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '2rem',
                zIndex: 9999,
                overflow: 'hidden'
            }}
        >
            <div style={{ maxWidth: '600px', width: '100%' }}>
                {bootText.slice(0, textIndex + 1).map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            marginBottom: '0.5rem',
                            fontSize: '1.2rem',
                            textShadow: '0 0 5px rgba(0, 255, 157, 0.5)'
                        }}
                    >
                        <span style={{ marginRight: '10px' }}>{">"}</span>
                        {text}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    style={{
                        width: '15px',
                        height: '25px',
                        background: '#00ff9d',
                        marginTop: '10px',
                        display: textIndex < bootText.length ? 'block' : 'none'
                    }}
                />
            </div>

            {/* Scanline effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%)',
                backgroundSize: '100% 4px',
                pointerEvents: 'none',
                opacity: 0.3
            }} />
        </motion.div>
    );
}
