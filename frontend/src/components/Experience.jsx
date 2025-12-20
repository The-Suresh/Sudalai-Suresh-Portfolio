import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, GraduationCap } from "lucide-react";

const internships = [
    {
        id: 1,
        company: "Foradian Technologies",
        role: "Front-End Development Intern",
        location: "Bengaluru, Karnataka",
        duration: "Jan 2023",
        description: [
            "Collaborated with the development team to enhance and maintain front-end web applications.",
            "Developed responsive UI components using HTML, CSS, and JavaScript.",
            "Improved user experience through clean and reusable components."
        ],
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        company: "AB Technologies",
        role: "Web Development Intern",
        location: "Nagercoil, Kanyakumari",
        duration: "Jul 2023",
        description: [
            "Worked closely with the backend team to integrate APIs into web applications.",
            "Ensured smooth data flow between frontend and backend services.",
            "Assisted in debugging and improving application functionality."
        ],
        tech: ["HTML", "CSS", "JavaScript", "REST APIs"]
    },
    {
        id: 3,
        company: "AFrame Technologies",
        role: "Full Stack Development Intern",
        location: "Online",
        duration: "June 2024",
        description: [
            "Implemented RESTful APIs for seamless client–server communication.",
            "Contributed to both frontend and backend development tasks.",
            "Improved application performance and efficiency."
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    }
];

const experience = [
    {
        id: 1,
        company: "Yethi Consulting",
        role: "Trainee Test Analyst",
        location: "Chennai, Tamil Nadu",
        duration: "Aug 4, 2025 – Present",
        description: [
            "Currently working as a BFSI Test Analyst trainee.",
            "Performing manual testing in banking and financial systems.",
            "Preparing and executing test cases and reporting defects.",
            "Ensuring software quality and compliance with BFSI standards."
        ],
        tech: ["Manual Testing", "Test Case Design", "Bug Tracking", "SDLC", "STLC", "BFSI Domain"]
    }
];

const TimelineItem = ({ item, index, type }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3, delay: index * 0.2 }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Mobile/Desktop distinct handling could be done, here sticking to left-aligned for consistency) */}

        {/* Card Content */}
        <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">

            {/* Gradient Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Connector Dot */}
            <span className="absolute top-8 -left-[45px] md:-left-[53px] w-6 h-6 rounded-full bg-background border-4 border-primary z-10 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(var(--primary),0.5)]"></span>

            {/* Connector Line to Card */}
            <span className="absolute top-10 -left-8 w-8 h-[2px] bg-primary/20 group-hover:bg-primary transition-colors hidden md:block"></span>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {item.role}
                    </h3>
                    <h4 className="text-lg text-primary font-medium">{item.company}</h4>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-secondary">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <Calendar size={14} className="text-primary" />
                        <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <MapPin size={14} className="text-primary" />
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>

            <ul className="relative z-10 space-y-2 mb-6 text-secondary/90 text-sm md:text-base">
                {item.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_5px_currentColor]" />
                        <span>{desc}</span>
                    </li>
                ))}
            </ul>

            <div className="relative z-10 flex flex-wrap gap-2">
                {item.tech.map((tech, idx) => (
                    <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="absolute top-4 right-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                {type === "internship" ? <GraduationCap size={120} /> : <Briefcase size={120} />}
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 space-y-16 md:space-y-20">

                {/* Work Experience */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 pl-4"
                    >
                        <h2 className="text-4xl font-bold border-l-4 border-primary pl-4">
                            Professional <span className="text-primary">Experience</span>
                        </h2>
                    </motion.div>

                    {/* Timeline Container */}
                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12 pb-12">
                        {/* Glowing Line Effect could go here */}

                        {experience.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} type="work" />
                        ))}
                    </div>
                </div>

                {/* Internships */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 pl-4"
                    >
                        <h2 className="text-4xl font-bold border-l-4 border-accent pl-4">
                            <span className="text-accent">Internships</span>
                        </h2>
                    </motion.div>

                    {/* Timeline Container */}
                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
                        {internships.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} type="internship" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
