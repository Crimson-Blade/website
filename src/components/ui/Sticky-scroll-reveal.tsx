'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    svg: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
  const backgroundColors = [
    'var(--black)',
    'var(--color-neutral-900)',
    'var(--color-slate-900)',
    'var(--black)',
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className='no-scrollbar relative flex h-full w-full items-center justify-center space-x-10 overflow-y-auto rounded-md p-10'
      ref={ref}
    >
      <motion.div className='div relative flex h-[40rem] justify-center px-4'>
        <div className='max-w-full'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-64'>
              <motion.h2
                initial={{
                  x: -2000,
                  opacity: 0,
                }}
                animate={{
                  x: activeCard === index ? 0 : -2000,
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                }}
                className='text-5xl font-bold text-slate-100'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  x: -2000,
                  opacity: 0,
                }}
                animate={{
                  x: activeCard === index ? 0 : -2000,
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                }}
                className='mt-10 max-w-5xl text-xl text-slate-300'
              >
                {item.description}
                {/* <span className='w-1/3'>{item.svg}</span> */}
              </motion.p>
            </div>
          ))}
          <div className='h-40  ' />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: -2000,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        className={cn(
          'sticky top-5 hidden h-full w-1/3 overflow-hidden rounded-md  lg:block',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
