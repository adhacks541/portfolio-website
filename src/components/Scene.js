'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as random from 'maath/random/dist/maath-random.esm';
import { useState, useRef, Suspense, useEffect } from 'react';

function CyberEarth({ isMobile }) {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta / 10;
    });

    const particleCount = isMobile ? 1000 : 3000;

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} stride={3} positions={new Float32Array(particleCount)} frustumCulled={false}>
                <Sphere args={[1.5, 64, 64]}>
                    <PointMaterial
                        transparent
                        color="#00ff9d"
                        size={0.02}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Sphere>
            </Points>
            <Sphere args={[1.45, 64, 64]}>
                <MeshDistortMaterial
                    color="#050505"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe
                />
            </Sphere>
        </group>
    );
}

function Particles({ isMobile }) {
    const ref = useRef();
    const particleCount = isMobile ? 1500 : 5000;
    const [sphere] = useState(() => random.inSphere(new Float32Array(particleCount), { radius: 3 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00b8ff"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Scene() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <Suspense fallback={null}>
                    <CyberEarth isMobile={isMobile} />
                    <Particles isMobile={isMobile} />
                    <EffectComposer>
                        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                        <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={[0.0005, 0.0005]} />
                    </EffectComposer>
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
