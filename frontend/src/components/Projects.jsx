import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Little Lemon Restaurant",
        category: "Web Development",
        image: "/project1.png",
        description: "A modern restaurant website with menu & reservation systems.",
        tech: ["React", "CSS", "UI/UX"],
        github: "https://github.com/The-Suresh/Meta-Frontend-Development-Capstone-Project"
    },
    {
        id: 2,
        title: "User Management System",
        category: "Desktop Application",
        image: "/project2.png",
        description: "Java & MySQL based system for managing user records securely.",
        tech: ["Java", "MySQL", "Swing"],
        github: "https://github.com/The-Suresh/User-Management-System"
    },
    {
        id: 3,
        title: "Organ Donation Platform",
        category: "Blockchain Technology",
        image: "/project3.png",
        description: "Secure donor-recipient matching using Ethereum smart contracts.",
        tech: ["Blockchain", "Solidity", "React"],
        github: "https://github.com/The-Suresh/organ-donation-platform"
    }
];

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl glass-card border border-white/10"
    >
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    title="GitHub Repo"
                >
                    <Github size={24} />
                </a>
            </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
            <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                {project.category}
            </span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-secondary text-sm mb-4 line-clamp-2">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-secondary"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        A selection of my recent work in web development, software engineering, and blockchain technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
