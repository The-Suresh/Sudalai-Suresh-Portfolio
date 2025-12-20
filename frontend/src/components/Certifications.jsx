import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, FileText } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "Meta Frontend Developer",
        issuer: "Meta",
        date: "2024",
        image: "/cert_meta.jpg",
        type: "image",
        link: "/cert_meta.jpg"
    },
    {
        id: 2,
        title: "AFrame Technologies Intern",
        issuer: "AFrame",
        date: "2024",
        image: "/cert_aframe.jpg",
        type: "image",
        link: "/cert_aframe.jpg"
    },
    {
        id: 3,
        title: "Great Learning Certificate",
        issuer: "Great Learning",
        date: "2024",
        image: "/cert_great_learning.jpg",
        type: "image",
        link: "/cert_great_learning.jpg"
    },
    {
        id: 4,
        title: "Cyber Warrior",
        issuer: "Cyber Security",
        date: "2023",
        image: "/cert_cyber_warrior.jpg",
        type: "image",
        link: "/cert_cyber_warrior.jpg"
    },
    {
        id: 5,
        title: "Naukri Campus Certificate",
        issuer: "Naukri",
        date: "2023",
        image: "/cert_nakuri.jpg",
        type: "image",
        link: "/cert_nakuri.jpg"
    },
    {
        id: 6,
        title: "Microsoft Certificate",
        issuer: "Microsoft",
        date: "2024",
        image: "/thumb_microsoft.png",
        link: "/cert_microsoft.pdf",
        type: "pdf"
    },
    {
        id: 7,
        title: "MongoDB Certificate",
        issuer: "MongoDB",
        date: "2024",
        image: "/thumb_mongodb.png",
        link: "/cert_mongodb.pdf",
        type: "pdf"
    },
    {
        id: 8,
        title: "AB Technologies Intern",
        issuer: "AB Technologies",
        date: "2023",
        image: "/thumb_ab_tech.png",
        link: "/cert_ab_tech.pdf",
        type: "pdf"
    },
    {
        id: 9,
        title: "Foradian Technologies Intern",
        issuer: "Foradian",
        date: "2023",
        image: "/thumb_foradian.png",
        link: "/cert_foradian.pdf",
        type: "pdf"
    }
];

const CertificationCard = ({ cert, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card flex flex-col items-center text-center border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden rounded-xl h-full"
    >
        {/* Image Display */}
        <div className="w-full h-48 bg-white/5 overflow-hidden relative">
            <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay View Button */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2 font-medium bg-primary hover:bg-primary/90 px-4 py-2 rounded-full transition-colors"
                >
                    {cert.type === "image" ? <Award size={18} /> : <FileText size={18} />}
                    {cert.type === "image" ? "View Image" : "Open PDF"}
                </a>
            </div>
        </div>

        <div className="p-6 w-full flex-grow flex flex-col">
            <h3 className="text-lg font-bold mb-1 text-white group-hover:text-primary transition-colors line-clamp-2">
                {cert.title}
            </h3>

            <p className="text-secondary text-sm mb-4 font-medium">
                {cert.issuer}
            </p>

            <div className="mt-auto flex items-center justify-center gap-2 text-xs text-secondary/80 pt-4 border-t border-white/5 w-full">
                <Calendar size={12} />
                <span>{cert.date}</span>
            </div>
        </div>
    </motion.div>
);

const Certifications = () => {
    return (
        <section id="certifications" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Licenses & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-secondary text-lg">My professional qualifications and achievements.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <CertificationCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
