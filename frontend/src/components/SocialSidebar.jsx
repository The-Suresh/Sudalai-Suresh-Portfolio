import { Github, Linkedin, Mail } from "lucide-react";

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
                whileHover={{ y: -4, color: "#0071E3" }}
                className="transition-colors"
                title="GitHub"
            >
                <Github size={24} />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/sudalaisureshp/"
                target="_blank"
                whileHover={{ y: -4, color: "#0071E3" }}
                className="transition-colors"
                title="LinkedIn"
            >
                <Linkedin size={24} />
            </motion.a>
            <motion.a
                href="mailto:sudalaisuresh333@gmail.com"
                whileHover={{ y: -4, color: "#0071E3" }}
                className="transition-colors"
                title="Email"
            >
                <Mail size={24} />
            </motion.a>
        </motion.div>
    );
};

export default SocialSidebar;
