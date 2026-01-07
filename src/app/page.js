import Hero from '@/components/Hero';
import Scene3D from '@/components/Scene3D';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import ContactForm from '@/components/ContactForm';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Scene3D />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <ContactForm />
    </main>
  );
}
