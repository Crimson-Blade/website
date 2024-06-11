import { motion } from 'framer-motion';
import React from 'react';

export default function IntroductionSla() {
  return (
    <motion.section className='flex h-full min-h-[50vh] flex-col items-center bg-black md:min-h-screen'>
      <div className=' flex flex-1 items-start text-xl font-medium text-[#D4B9B9] sm:text-3xl md:text-4xl '>
        <p>Streamlining</p>
      </div>
      <h1 className='h-100 w-3/4 flex-1 text-center text-4xl text-white sm:px-5 sm:text-4xl  md:text-8xl'>
        Student LifeCycle Management
      </h1>
    </motion.section>
  );
}
