import { motion } from 'framer-motion';
import React from 'react';

function Graph({ highlightedNumber }: { highlightedNumber: number }) {
  const description = [
    { id: 1, nodes: ['Student App'] },
    { id: 2, nodes: ['Copilot Stack', 'UpEase Console', 'Your App'] },
    { id: 3, nodes: ['UpEase Framework', 'University Data Model'] },
    {
      id: 4,
      nodes: ['Microsoft EDU', 'Office Apps', 'Multi Tenant', 'Microsoft AD'],
    },
  ];

  return (
    <>
      <div key='1' className='flex flex-col items-center gap-8'></div>
      {description
        .filter((item) => item.id === highlightedNumber)
        .map((item, id) => (
          <motion.div
            initial={{
              x: 1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
            }}
            key={id}
            className='flex h-full w-full flex-col justify-around gap-6 rounded-lg p-6'
          >
            {item.nodes.map((node, index) => (
              <motion.div
                key={index}
                className='flex h-1/4 rounded-lg border border-gray-200 bg-gray-400 p-6 text-center shadow-lg shadow-gray-300'
                initial={{
                  x: 10000,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: 10000,
                  opacity: 0,
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.3,
                  delay: index * 0.1, // Add delay for staggered animation
                }}
              >
                <div className='m-auto text-4xl font-bold'>{node}</div>
              </motion.div>
            ))}
          </motion.div>
        ))}
    </>
  );
}

export default Graph;
