import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import CustomCursor from '@/components/CustomCursor';
import Experience from '@/components/Experience';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <CustomCursor />
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
