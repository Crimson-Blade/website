import React from 'react';

import { Graph } from '@/components/Graph';
import NavbarBlack from '@/components/Navbarblack';

// import { StickyScroll } from '@/components/ui/Sticky-scroll-reveal';

export default function FrameworkSection() {
  const products = [
    {
      title: 'UpEase Console',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'Student App',
      description: '',
    },
    {
      title: 'Your App',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'Copilot Stack',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'UpEase Framework',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'University Data Model',
      description: '',
    },
    {
      title: 'Microsoft EDU',
      description:
        'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      title: 'Office Apps',
      description: '',
    },
    {
      title: 'Microsoft AD',
      description: '',
    },
    {
      title: 'Multi Tenant',
      description: '',
    },
  ];

  return (
    <div className='h-full w-full pb-40 lg:px-20'>
      <NavbarBlack />
      {/* <customHeroParallax products={products} />{' '} */}
      <Graph products={products} />
    </div>
  );
}
