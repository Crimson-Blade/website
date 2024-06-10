import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function IntroductionFramework() {
  const targetRef = React.useRef<HTMLDivElement>(null); // Add type annotation to targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [150, 0]);

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
      initial={{ y: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.5 }}
      animate={{ y: '-13rem', opacity: 1 }}
      style={{
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      ref={targetRef}
      onClick={handleClick}
      className='z-50 flex h-full min-h-[50vh] flex-col items-center bg-black md:min-h-full'
    >
      <div className='mt-10 flex flex-1 flex-col items-center gap-6 text-xl font-medium text-[#D4B9B9] sm:text-3xl md:text-4xl '>
        <motion.svg
          className='hover:cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          height='30'
          width='20'
          viewBox='0 0 320 512'
          animate={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <path
            fill='#ffffff'
            d='M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z'
          />
        </motion.svg>
        <p className='hover:cursor-pointer'>Introducing</p>
      </div>
      <div className='flex h-[30rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black'>
        <h1 className='relative z-20 text-center text-2xl font-bold text-white md:text-5xl lg:text-8xl'>
          UpEase Framework
        </h1>
        {/* <div className='relative h-40 w-[40rem]'>
      <div className='absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
          <div className='absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
          <div className='absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
          <div className='absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

      {/* <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1.5}
            particleDensity={1200}
            className='h-3/4 w-full'
            particleColor='#FFFFFF'
          /> */}

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className='absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
        </div> */}
      </div>
      {/* <div className=' h-full w-full lg:px-20'>
        <Graph products={products} />
      </div> */}
    </motion.section>
  );
}
