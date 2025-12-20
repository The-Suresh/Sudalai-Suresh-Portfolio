import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.cursor-pointer')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            backgroundColor: "white",
            mixBlendMode: "difference",
        },
        hover: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: 2.5,
            backgroundColor: "white",
            mixBlendMode: "difference",
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"
            variants={variants}
            animate={isHovered ? "hover" : "default"}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
