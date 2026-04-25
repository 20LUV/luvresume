import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Services />
      <Experience />
      <Skills />
      <ContactForm />
      <Contact />
    </main>
  );
};

export default Index;
