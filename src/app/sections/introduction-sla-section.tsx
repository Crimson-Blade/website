import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function IntroductionSla() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [150, 0]);

  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 1.3 }}
      animate={{ y: -300, opacity: 1 }}
      style={{
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      ref={targetRef}
      className='mb-[-300px] flex h-full  flex-col items-center bg-black md:min-h-screen'
    >
      <div className='flex flex-1 items-center text-xl font-medium text-[#D4B9B9] sm:text-3xl md:text-4xl '>
        <p>Introducing</p>
      </div>
      <h1 className='h-100 w-3/4 flex-1 text-center text-5xl text-white sm:px-5 sm:text-6xl  md:text-8xl'>
        Student Lifecycle Management
      </h1>
    </motion.section>
  );
}
