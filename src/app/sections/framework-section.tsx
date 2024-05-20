import React from 'react';

import Graph from '@/components/Graph';
import { StickyScroll } from '@/components/ui/Sticky-scroll-reveal';

const FrameworkSection = () => {
  const content = [
    {
      title: 'Student App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',
      content: <Graph highlightedNumber={1} />,
    },
    {
      title: 'Copilot Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',

      content: <Graph highlightedNumber={2} />,
    },
    {
      title: 'Upease Console',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',

      content: <Graph highlightedNumber={3} />,
    },
    {
      title: 'Your App',
      description:
        'Lorem ipsum dopor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus quis orci pharetra fermentum. Pellentesque nec mi nec sem efficitur interdum. Mauris nec est quis turpis vehicula luctus',

      content: <Graph highlightedNumber={4} />,
    },
  ];
  return (
    <div className='h-full w-full'>
      <StickyScroll content={content} />
    </div>
  );
};

export default FrameworkSection;
