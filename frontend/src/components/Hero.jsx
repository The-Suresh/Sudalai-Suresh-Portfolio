import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

import profileImg from '../assets/Suresh.avif'; // Updated to match filename case

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-32 pb-12 px-6 container mx-auto relative overflow-hidden">
            {/* Background Blobs */}


            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-6"
            >
                <span className="text-secondary font-medium tracking-wide text-lg">Hello, I'm</span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                    Sudalai Suresh
                </h1>

                <div className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 h-[60px]">
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                            'Software Tester',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                <p className="text-secondary text-lg max-w-md leading-relaxed">
                    Frontend Developer and Software Testing enthusiast focused on building clean, responsive, and high-quality web experiences.
                </p>

                <div className="flex space-x-4 pt-4">
                    <a href="#projects" className="bg-foreground text-background px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="/Sudalai_Suresh_Resume.pdf"
                        download="Sudalai_Suresh_Resume.pdf"
                        className="border border-foreground/20 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-foreground/5 transition-colors cursor-pointer"
                    >
                        Download Resume <Download size={20} />
                    </a>
                </div>
            </motion.div>

            {/* Right Image (Glass Card) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
            >
                <div className="relative w-[260px] h-[360px] md:w-[350px] md:h-[450px]">
                    <div className="absolute inset-0 glass-card transform rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer group p-4">
                        <div className="w-full h-full bg-slate-200 rounded-[2rem] overflow-hidden relative">
                            <img
                                src={profileImg}
                                alt="Sudalai Suresh"
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                            {/* Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
