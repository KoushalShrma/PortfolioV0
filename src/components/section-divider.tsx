'use client';

import { motion } from 'framer-motion';

import Typewriter from '@/components/typewriter';

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="my-2 flex w-full items-center justify-center overflow-visible py-2 sm:my-4"
    >
      <Typewriter className="font-heading bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-4xl font-normal leading-normal text-transparent md:text-5xl" />
    </motion.div>
  );
};
