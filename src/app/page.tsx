import { About } from '@/components/about';
import { AIChat } from '@/components/ai-chat';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background z-[80] hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
      <AIChat />
    </>
  );
};

export default HomePage;
