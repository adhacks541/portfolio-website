'use client';

import { useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import styles from './HolographicCard.module.css';

export default function HolographicCard({ children, className = '' }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            className={`${styles.card} ${className}`}
        >
            <div className={styles.border} style={style} />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}
