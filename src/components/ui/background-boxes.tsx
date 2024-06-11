'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(45).fill(1);
  const cols = new Array(30).fill(1);
  const colors = [
    '--color-primary-700',
    '--color-neutral-900',
    '--color-primary-300',
  ];
  const getRandomColor = () => {
    return `var(${colors[Math.floor(Math.random() * colors.length)]})`;
  };

  return (
    <div
      style={{
        transform: `translate(-60%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        'absolute -top-1/4 left-1/4 z-20 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 p-4 ',
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className='relative h-24  w-48  border-l border-slate-300'
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0.3 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className='relative h-24  w-48 border-r border-t border-slate-300'
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-slate-700'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v12m6-6H6'
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
