'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextGlareProps {
    text: string;
    className?: string;
    gradientColors?: string[];
}

export default function TextGlare({
    text,
    className = "",
    gradientColors = ["#3b82f6", "#22d3ee", "#3b82f6"] // Blue to Cyan back to Blue
}: TextGlareProps) {
    const gradientString = gradientColors.join(', ');

    return (
        <span className={`relative inline-block overflow-hidden ${className}`}>
            {/* Base gradient text */}
            <motion.span
                className="relative z-10 text-transparent bg-clip-text"
                style={{
                    backgroundImage: `linear-gradient(to right, ${gradientString})`,
                    backgroundSize: "200% auto",
                }}
                animate={{
                    backgroundPosition: ["0% center", "200% center"]
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {text}
            </motion.span>

            {/* Glare effect sweeping across */}
            <motion.span
                className="absolute inset-0 z-20 pointer-events-none text-transparent bg-clip-text"
                style={{
                    backgroundImage: "linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%, transparent 100%)",
                    backgroundSize: "300% 100%", // Made it 300% wider to avoid clipping at the edges during the sweep
                }}
                animate={{
                    backgroundPosition: ["150% 0", "-150% 0"] // Sweeps from way outside to way outside right-to-left
                }}
                transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3
                }}
            >
                {/* Same text but transparent to size the mask properly */}
                {text}
            </motion.span>
        </span>
    );
}
