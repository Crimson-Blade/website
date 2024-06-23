import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function IntroductionFramework() {
  const targetRef = React.useRef<HTMLDivElement>(null); // Add type annotation to targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const handleClick = () => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.section
      initial={{ y: '0', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
      animate={{ y: '-7rem', opacity: 1 }}
      style={{
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      ref={targetRef}
      className='z-50 flex flex-col items-center bg-black'
    >
      <motion.div
        initial={{ y: '-4rem' }}
        style={{ opacity: opacity }}
        id='ARROW'
        onClick={handleClick}
        className='flex flex-1 flex-col items-center gap-6 text-xl font-medium text-[#D4B9B9] sm:text-3xl md:text-4xl '
      >
        <motion.svg
          className='hover:cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          height='30'
          width='20'
          viewBox='0 0 320 512'
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <path
            fill='#000000'
            d='M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z'
          />
        </motion.svg>
      </motion.div>
      <div
        id='HEADING'
        className='flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-transparent pt-[12rem]'
      >
        <p className='mb-4 text-4xl text-white underline hover:cursor-pointer'>
          Introducing
        </p>
        <h1 className='relative z-50 text-center text-5xl font-bold text-white lg:text-8xl'>
          UpEase Framework
        </h1>
      </div>
    </motion.section>
  );
}
