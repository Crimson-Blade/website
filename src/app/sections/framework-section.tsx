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
        <div className='space-y-6 text-lg'>
          <div className='flex w-full gap-3'>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              UpEase Console
            </div>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              Your App
            </div>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              Student App
            </div>
          </div>
          <div className='mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-2xl shadow-white'>
            <p className='mx-auto text-3xl'> Copilot Stack</p>
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
        <div className='flex items-center gap-3 space-x-4 text-xl'>
          <div className='flex w-72 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
            UpEase Framework
          </div>
          <div className='flex w-72 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
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
        <div className='flex flex-col justify-center space-y-6 text-lg'>
          <div className='mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
            <p className='mx-auto text-3xl'>Microsoft EDU</p>
          </div>
          <div className='flex w-full gap-3'>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              Office Apps
            </div>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              Microsoft AD
            </div>
            <div className='flex w-48 items-center  rounded-xl border-2 border-gray-600 bg-black p-10 text-center text-white shadow-lg shadow-white'>
              Multi Tenant
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className='h-full w-full'>
      {/* <customHeroParallax products={products} />{' '} */}
      <Graph products={products} />
    </div>
  );
}
