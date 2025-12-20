import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "Sudalai Suresh";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    useEffect(() => {
        let timer;
        let progressTimer;

        // Progress Counter
        progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    if (onComplete) setTimeout(onComplete, 200); // reduced delay
                    return 100;
                }
                return prev + 2; // Slower increment (approx 1.0s total)
            });
        }, 20);

        // Text Scramble Effect
        let iteration = 0;
        timer = setInterval(() => {
            setText(
                fullText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return fullText[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("")
            );

            if (iteration >= fullText.length) {
                clearInterval(timer);
            }

            iteration += 1 / 2;
        }, 30);

        return () => {
            clearInterval(timer);
            clearInterval(progressTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            exit={{ y: -window.innerHeight, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative">
                <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-wider tabular-nums">
                    {text}
                </h1>
                <div className="h-1 w-full bg-white/20 mt-4 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-right mt-2 text-white/50">{progress}%</p>
            </div>
        </motion.div>
    );
};

export default Loader;
