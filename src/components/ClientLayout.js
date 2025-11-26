'use client';

import { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <ReactLenis root>
                    <Navbar />
                    <main>{children}</main>
                </ReactLenis>
            )}
        </>
    );
}
