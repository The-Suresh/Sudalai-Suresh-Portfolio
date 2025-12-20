import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const Cursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [mouseX, mouseY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="hidden md:block pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: background,
            }}
        />
    );
};

export default Cursor;
