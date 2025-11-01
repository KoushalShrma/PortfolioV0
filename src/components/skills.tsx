'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const marqueeVariants = {
  animate: {
    x: [0, '-50%'],
    transition: {
      x: {
        duration: 25,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  },
};

export const Skills = () => {
  // Duplicate the skills array to create seamless circular loop
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <div className="mt-10 w-full overflow-hidden py-4 md:mt-14">
      <motion.div
        className="flex w-max items-center gap-24"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedSkills.map(({ icon }, index) => (
          <div
            key={`skill-${index}`}
            className="flex shrink-0 items-center justify-center"
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
