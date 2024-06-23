// import Image from 'next/image';
import React from 'react';

import { MacbookScroll } from '@/components/ui/macbook-scroll';
// import Tilt from 'react-parallax-tilt';

// import styles from '@/styles/ams-section.module.css';

// import { cn } from '@/lib/utils';

// import NavbarBlack from '@/components/Navbarblack';
export default function StudentApp() {
  return (
    <div>
      <div className='w-full overflow-hidden'>
        <MacbookScroll
          title={
            <span>
              Showcase the Students Section in <br />{' '}
              <span className='text-primary-600 text-5xl'>UpEase Console</span>
            </span>
          }
          src='/images/STUDENT.svg'
          showGradient={false}
        />
      </div>
    </div>
  );
}
