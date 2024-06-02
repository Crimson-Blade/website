import React from 'react';

import { Graph } from '@/components/Graph';

// import { StickyScroll } from '@/components/ui/Sticky-scroll-reveal';

export default function FrameworkSection() {
  const products = [
    {
      title: 'Copilot Stack',
      description1:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      description2:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      display: (
        <div className='space-y-6  px-4'>
          <div className='flex w-full gap-3 text-sm md:text-base'>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              UpEase Console
            </div>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              Your App
            </div>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              Student App
            </div>
          </div>
          <div className='mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
            <p className='mx-auto text-xl'> Copilot Stack</p>
          </div>
        </div>
      ),
    },
    {
      title: 'UpEase Framework',
      description1:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      description2:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      display: (
        <div className='flex w-full items-center justify-center gap-4 px-4 text-sm md:text-xl'>
          <div className='flex h-24 w-44 items-center rounded-xl  border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:h-40 md:w-56 md:p-10'>
            UpEase Framework
          </div>
          <div className='flex h-24 w-44 items-center rounded-xl  border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:h-40 md:w-56 md:p-10'>
            University Data Model
          </div>
        </div>
      ),
    },
    {
      title: 'Microsoft EDU',
      description1:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      description2:
        'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      display: (
        <div className='flex flex-col justify-center space-y-6 px-4 text-lg'>
          <div className='mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
            <p className='mx-auto text-xl'>Microsoft EDU</p>
          </div>
          <div className='flex w-full gap-3 text-sm md:text-base'>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              Office Apps
            </div>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              Microsoft AD
            </div>
            <div className='flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-black p-4 text-center text-white shadow-lg shadow-white md:w-40 md:p-10'>
              Multi Tenant
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='top-0 z-50 -mt-28 h-full w-full lg:px-20'>
      {/* <customHeroParallax products={products} />{' '} */}
      <Graph products={products} />
    </div>
  );
}
