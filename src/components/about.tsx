'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About', 0.3);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">
          I'm Koushal Sharma, a Full Stack Java Developer who genuinely loves
          building web applications that are scalable, secure, and actually work
          well in the real world. My main toolkit? Java, Spring Boot, Hibernate,
          JPA, MySQL, React.js, HTML, and Tailwind CSS—basically everything
          needed to build something from the ground up and see it through to the
          end.
        </p>
        <p className="mb-4">
          I've always had this thing for Data Structures and Algorithms (maybe
          it's the problem-solving aspect), and I make sure my code is clean and
          testable before it goes anywhere near production. I'm comfortable
          working across the entire stack—whether that means designing a solid
          backend architecture or putting together interfaces that people find
          easy to use. Day-to-day, I rely on Maven, GitHub, Postman, and JUnit 5
          to keep things organized and functional.
        </p>
        <p>
          Outside of studying, I enjoy solving algorithm problems, learning new
          tools, and preparing for technical interviews. I am eager to join a
          team where I can contribute, learn, and grow.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
