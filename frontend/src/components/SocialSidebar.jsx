import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const SocialSidebar = () => {
    return (
        <motion.div
            className="fixed right-6 bottom-32 hidden md:flex flex-col items-center gap-6 z-50 text-secondary after:content-[''] after:w-[1px] after:h-24 after:bg-secondary/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
        >
            <motion.a
                href="https://github.com/The-Suresh"
                target="_blank"
                whileHover={{ y: -4, color: "#181717" }} // GitHub Color
                className="transition-colors"
                title="GitHub"
            >
                <FaGithub size={24} />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/sudalaisureshp/"
                target="_blank"
                whileHover={{ y: -4, color: "#0A66C2" }} // LinkedIn Color
                className="transition-colors"
                title="LinkedIn"
            >
                <FaLinkedin size={24} />
            </motion.a>
            <motion.a
                href="mailto:sudalaisuresh333@gmail.com"
                whileHover={{ y: -4, color: "#EA4335" }} // Gmail Color
                className="transition-colors"
                title="Email"
            >
                <SiGmail size={24} />
            </motion.a>
        </motion.div>
    );
};

export default SocialSidebar;
