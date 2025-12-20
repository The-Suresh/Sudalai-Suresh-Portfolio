import { useState } from "react";
import { motion } from "framer-motion";

const MovingBlob = ({ className, delay }) => {
    // Generate random duration once on mount to keep render pure
    const [duration] = useState(() => 10 + Math.random() * 10);

    return (
        <motion.div
            className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20 animate-blob will-change-transform ${className}`}
            animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        />
    );
};

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors duration-300">
            {/* Apple-like mesh gradients */}
            <MovingBlob className="top-0 -left-4 w-96 h-96 bg-purple-300 dark:bg-purple-900" delay={0} />
            <MovingBlob className="top-0 -right-4 w-96 h-96 bg-blue-300 dark:bg-blue-900" delay={2} />
            <MovingBlob className="-bottom-8 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-900" delay={4} />
            <MovingBlob className="-bottom-8 right-20 w-96 h-96 bg-cyan-300 dark:bg-cyan-900" delay={6} />

            {/* Noise texture for premium feel - OPTIONAL */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
};

export default Background;
