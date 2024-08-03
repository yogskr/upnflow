'use client';

import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
};

export default function BlogTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="enter"
        transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
