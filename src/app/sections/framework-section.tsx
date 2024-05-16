import React from 'react';

import Graph from '@/components/Graph';
import { StickyScroll } from '@/components/ui/Sticky-scroll-reveal';

// // type Props = object;
// type Framework = {
//   id: number;
//   description: string;
// };

// const frameworkList: Framework[] = [
//   {
//     id: 1,
//     description: 'First half of the framework',
//   },
//   {
//     id: 2,
//     description: 'Second half of the framework',
//   },
//   {
//     id: 3,
//     description: 'Third half of the framework',
//   },
//   {
//     id: 4,
//     description: 'Fourth half of the framework',
//   },
//   {
//     id: 5,
//     description: 'Fifth half of the framework',
//   },
//   {
//     id: 6,
//     description: 'Sixth half of the framework',
//   },
// ];

const FrameworkSection = () => {
  const content = [
    {
      title: 'Student App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',
      svg: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
          <path d='M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z' />
        </svg>
      ),
      content: <Graph highlightedNumber={1} />,
    },
    {
      title: 'Copilot Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',
      svg: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
          <path d='M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z' />
        </svg>
      ),
      content: <Graph highlightedNumber={2} />,
    },
    {
      title: 'Upease Console',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',
      svg: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
          <path d='M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z' />
        </svg>
      ),
      content: <Graph highlightedNumber={3} />,
    },
    {
      title: 'Your App',
      description:
        'Lorem ipsum dopor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',
      svg: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
          <path d='M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z' />
        </svg>
      ),
      content: <Graph highlightedNumber={4} />,
    },
  ];
  const targetRef = React.useRef<HTMLDivElement>(null); // Add type annotation to targetRef

  const handleClick = () => {
    if (targetRef.current) {
      window.scrollTo({
        //center
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='top-0 h-full w-full ' onClick={handleClick}>
      <div className='h-full w-full '>
        <StickyScroll content={content} />
      </div>

      {/* <Graph /> */}
      {/* <div className='flex w-full flex-col gap-10 text-center'>
        {frameworkList.map((framework: Framework) => (
          <div key={framework.id} className='flex items-center gap-2'>
            <span className='rounded-full bg-white p-4 font-semibold text-black'>
              {framework.id}
            </span>
            <p className=' text-3xl'>{framework.description}</p>
          </div>
        ))}
      </div>
      <div className='text-5x h-3/4 w-full rounded-3xl border-2 border-gray-900 bg-slate-400 '>
        second half
      </div> */}
    </div>
  );
};

export default FrameworkSection;
