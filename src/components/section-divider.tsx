'use client';

import { motion } from 'framer-motion';
import Typewriter from '@/components/typewriter';

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="my-2 py-2 w-full sm:my-4 flex items-center justify-center overflow-visible"
    >
      <Typewriter className="font-heading text-4xl md:text-5xl font-normal bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent leading-normal" />
    </motion.div>
  );
};
