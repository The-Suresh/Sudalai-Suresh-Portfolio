import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code, Bug, ShieldCheck, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../hooks/use-theme";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "glass border-b border-white/5 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            {/* Main Bar Content */}
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold tracking-tighter cursor-pointer"
                >
                    <div className="flex items-center gap-1">
                        <Code className="w-6 h-6 text-primary" />
                        <span className="text-secondary/50 mx-1">+</span>
                        <Bug className="w-6 h-6 text-accent" />
                        <span className="text-secondary/50 mx-1">+</span>
                        <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                </motion.div>

                {/* Desktop Menu */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="hidden md:flex items-center space-x-8"
                >
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.to}
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={800}
                                className="cursor-pointer text-sm font-medium hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.button
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>
                </motion.div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 overflow-hidden bg-background/50 backdrop-blur-md rounded-b-[2rem]"
                    >
                        <div className="flex flex-col items-center py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={800}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="cursor-pointer text-lg font-medium hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
