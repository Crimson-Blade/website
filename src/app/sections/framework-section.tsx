import React from 'react';

// import { StickyScroll } from '@/components/ui/Sticky-scroll-reveal';

export default function FrameworkSection() {
  // const products = [
  //   {
  //     title: 'UpEase Console',
  //     description:
  //       'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   },
  //   {
  //     title: 'Student App',
  //     description: '',
  //   },
  //   {
  //     title: 'Your App',
  //     description:
  //       'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   },
  //   {
  //     title: 'Copilot Stack',
  //     description:
  //       'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   },
  //   {
  //     title: 'UpEase Framework',
  //     description:
  //       'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   },
  //   {
  //     title: 'University Data Model',
  //     description: '',
  //   },
  //   {
  //     title: 'Microsoft EDU',
  //     description:
  //       'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  //   },
  //   {
  //     title: 'Office Apps',
  //     description: '',
  //   },
  //   {
  //     title: 'Microsoft AD',
  //     description: '',
  //   },
  //   {
  //     title: 'Multi Tenant',
  //     description: '',
  //   },
  // ];

  return (
    <section className='h-full w-full py-20 lg:px-20'>
      <div className='grid grid-cols-3'>
        <div className=''>
          <h3 className='text-center text-4xl text-white'>Our Copilot</h3>
          <p className='mt-3 px-7 text-center text-2xl text-white'>
            Our Copilot seemlessly integrates into the UpEase console to provide
            educators with all the resources they need to manage their
            classrooms
          </p>
        </div>
        <div>
          <h3 className='text-center text-4xl text-white'>UpEase Framework</h3>
          <p className='mt-3 px-7 text-center text-2xl text-white'>
            Our Framework makes it easier for management to take care of
            enterprise level operations such as managing classrooms, educators,
            students and courses.
          </p>
        </div>
        <div>
          <h3 className='text-center text-4xl text-white'>Microsoft EDU</h3>
          <p className='mt-3 px-7 text-center text-2xl text-white'>
            Our Deep integration with Microsoft Suite helps educators get aboard
            the software due to the familiarity of Microsoft products in the
            digital age
          </p>
        </div>
      </div>
      {/* <NavbarBlack /> */}
      {/* <customHeroParallax products={products} />{' '} */}
      {/* <Graph products={products} /> */}
    </section>
  );
}
