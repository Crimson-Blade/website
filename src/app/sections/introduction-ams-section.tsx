import { motion } from 'framer-motion';
import React from 'react';

export default function IntroductionAms() {
  return (
    <motion.section className='flex flex-col items-center bg-black pt-52'>
      <h1 className='w-3/4 text-center text-5xl text-white sm:px-5 sm:text-6xl md:text-8xl'>
        UpEase Console
      </h1>
    </motion.section>
  );
}
