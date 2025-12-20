import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
