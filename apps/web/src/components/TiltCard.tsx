'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}

export default function TiltCard({
    children,
    className = "",
    glowColor = "rgba(59, 130, 246, 0.15)" // Default primary shadow
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const rotateX = useMotionTemplate`${springY}deg`;
    const rotateY = useMotionTemplate`${springX}deg`;

    // Glow effect coordinates
    const glowX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const glowY = useSpring(mouseY, { damping: 30, stiffness: 200 });
    const maskImage = useMotionTemplate`radial-gradient(250px at ${glowX}px ${glowY}px, white, transparent)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        // 3D Rotation Calculation (-5 to 5 degrees)
        const rX = ((mouseYPos / height) - 0.5) * -10;
        const rY = ((mouseXPos / width) - 0.5) * 10;

        x.set(rY);
        y.set(rX);

        // Glow Calculation
        mouseX.set(mouseXPos);
        mouseY.set(mouseYPos);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className={`relative group rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:border-slate-300 dark:hover:border-slate-700 ${className}`}
        >
            {/* Hover Spotlight Glow Overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay dark:mix-blend-lighten"
                style={{
                    background: glowColor,
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage,
                }}
            />

            {/* Content floating above the card slightly during 3D tilt */}
            <div
                className="relative z-10 h-full w-full rounded-xl overflow-hidden"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </motion.div>
    );
}
