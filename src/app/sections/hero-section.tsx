import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { AceButton } from '@/components/buttons/acebutton';
import { HoverBorderGradient } from '@/components/buttons/acehoverbutton';

function TextPrimary(children: React.ReactNode) {
  return <span className='text-[var(--color-primary-600)]'>{children}</span>;
}

// function TextGradient(children: React.ReactNode) {
//   return <span style={{
//     background: 'linear-gradient(10deg, #2B51D7 -79.6%, #2B51D7 -18.77%, rgba(43, 81, 215, 0.95) 29.97%, #FFF 99.2%)',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   }} >{children}</span>;
// }

function TextHighlight(children: React.ReactNode) {
  return <span className='font-bold'>{children}</span>;
}

export default function Hero() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div
      ref={targetRef}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, y: -40 }}
      style={{
        opacity,
        translateY,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: -10,
        overflowX: 'hidden',
      }}
      className='relative -z-10 h-screen'
    >
      <div
        className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'
        style={{ paddingTop: '100px' }}
      >
        {/* <Logo className='w-16' /> */}
        <div className='justify-center text-center'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='flex items-center space-x-2 bg-white text-black'
          >
            Read: Introducing UpEase
          </HoverBorderGradient>
        </div>

        <p className='mt-4 max-w-4xl text-4xl font-bold md:text-6xl'>
          {/* Data driven solutions to empower {TextPrimary('educators')}, engage{' '}
          {TextPrimary('students')} and bring {TextPrimary('intelligence')}! */}
          A {TextPrimary('Copilot')} for higher education
        </p>
        <p className='mt-4 max-w-3xl text-xl font-normal'>
          We provide data driven solutions to empower{' '}
          {TextHighlight('educators')}, engage {TextHighlight('students')} and
          bring {TextHighlight('intelligence')}!
        </p>
        <div className='relative mt-8'>
          <AceButton className='relative bg-[var(--color-primary-600)] font-semibold text-white '>
            Start a Conversation
          </AceButton>
          <Image
            src='/images/Arrow.png'
            alt='Description of Image'
            width={20}
            height={20}
            className='absolute -bottom-16 -right-0 '
          />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        {typeof window !== 'undefined' &&
          [...Array(Math.ceil(window.innerWidth / 50))].map((_, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: `${index * 100}px`,
                width: '1px',
                height: '100%',
                backgroundColor: '#A9A9A9',
              }}
            />
          ))}

        {/* Horizontal inclined lines */}
        {typeof window !== 'undefined' &&
          [...Array(Math.ceil(window.innerHeight / 50))].map((_, index) => (
            <div
              key={`horizontal-${index}`}
              style={{
                position: 'absolute',
                top: `${index * 100}px`,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: '#A9A9A9',
                transform: `rotate(10deg)`,
                transformOrigin: 'top right',
              }}
            />
          ))}
      </div>
    </motion.div>
  );
}
