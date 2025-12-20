import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaGlobe, FaRegFileAlt, FaBox
} from "react-icons/fa";
import {
    SiTailwindcss, SiPostman, SiGithub
} from "react-icons/si";
import {
    BiDevices, BiCodeBlock, BiAnalyse
} from "react-icons/bi";
import {
    MdOutlineDesignServices, MdOutlineSpeed, MdOutlineAccessibility,
    MdIntegrationInstructions, MdManageHistory, MdOutlineBugReport,
    MdOutlineRule, MdOutlineFactCheck, MdOutlineLoop, MdOutlineSdStorage,
    MdOutlineDescription, MdOutlinePersonSearch, MdOutlineCategory, MdPlaylistAddCheck
} from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi";
import { TbApi } from "react-icons/tb";
import { VscReferences } from "react-icons/vsc";
import { BsBrowserChrome, BsFire } from "react-icons/bs";

// eslint-disable-next-line no-unused-vars
const SkillCard = ({ icon: Icon, name, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group"
    >
        <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${color}`}>
            <Icon size={40} />
        </div>
        <span className="font-medium text-center text-sm md:text-base">{name}</span>
    </motion.div>
);

const Skills = () => {
    const frontendSkills = [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript (ES6+)", icon: FaJs, color: "text-yellow-400" },
        { name: "React.js", icon: FaReact, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
        { name: "Responsive Design", icon: BiDevices, color: "text-green-400" },
        { name: "Cross-Browser", icon: FaGlobe, color: "text-blue-400" },
        { name: "UI/UX Principles", icon: MdOutlineDesignServices, color: "text-pink-400" },
        { name: "Component Arch", icon: BiCodeBlock, color: "text-indigo-400" },
        { name: "State Management", icon: VscReferences, color: "text-blue-300" }, // Approximate
        { name: "REST API", icon: TbApi, color: "text-yellow-600" },
        { name: "Performance Opt", icon: MdOutlineSpeed, color: "text-red-500" },
        { name: "Accessibility", icon: MdOutlineAccessibility, color: "text-blue-600" },
        { name: "Git & GitHub", icon: SiGithub, color: "text-foreground" },
        { name: "Version Control", icon: FaGitAlt, color: "text-orange-600" },
    ];

    const testingSkills = [
        { name: "Manual Testing", icon: MdPlaylistAddCheck, color: "text-green-500" },
        { name: "Test Design", icon: MdOutlineRule, color: "text-purple-400" },
        { name: "SDLC & STLC", icon: MdOutlineSdStorage, color: "text-blue-400" },
        { name: "Functional Testing", icon: MdOutlineCategory, color: "text-orange-400" },
        { name: "Regression Testing", icon: MdOutlineLoop, color: "text-red-400" },
        { name: "Smoke Testing", icon: BsFire, color: "text-orange-500" },
        { name: "Sanity Testing", icon: MdOutlineFactCheck, color: "text-teal-400" },
        { name: "Bug Tracking", icon: MdOutlineBugReport, color: "text-red-600" },
        { name: "Defect Life Cycle", icon: MdManageHistory, color: "text-yellow-500" },
        { name: "Test Scenarios", icon: MdOutlineDescription, color: "text-indigo-400" },
        { name: "Req Analysis", icon: BiAnalyse, color: "text-cyan-600" },
        { name: "Test Docs", icon: FaRegFileAlt, color: "text-gray-500" },
        { name: "Black Box", icon: FaBox, color: "text-black dark:text-white" },
        { name: "UAT", icon: MdOutlinePersonSearch, color: "text-green-400" },
        { name: "API Testing", icon: SiPostman, color: "text-orange-600" },
    ];

    return (
        <section id="skills" className="py-16 md:py-24">
            <div className="container mx-auto px-6 space-y-12 md:space-y-16">
                {/* Frontend Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-primary">Frontend</span> Developer Skills
                        </h2>
                        <p className="text-secondary text-lg">Building beautiful, responsive user interfaces.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {frontendSkills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>

                {/* Testing Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-accent">Software</span> Testing Skills
                        </h2>
                        <p className="text-secondary text-lg">Ensuring quality, reliability, and performance.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {testingSkills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
