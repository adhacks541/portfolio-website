import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
            <Footer />
        </>
    );
}
