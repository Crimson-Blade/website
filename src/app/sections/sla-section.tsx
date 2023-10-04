import Image from 'next/image';
import React from 'react';

import styles from '@/styles/sla-section.module.css';

import { cn } from '@/lib/utils';

import NavbarBlack from '@/components/Navbarblack';

export default function StudentApp() {
  return (
    <>
      <NavbarBlack />
      <div className={styles.gridmain}>
        <div className={cn(styles.gridmobile, ' relative')}>
          <Image
            src='/images/phone.png'
            alt='Description of Image'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='contain' // Ensures image scales correctly and doesn't overflow
            quality={90}
            priority={true}
          />
        </div>
        <div className={styles.gridsub}>
          <div
            className={cn(
              styles.gridone,
              'rounded-3xl border-2 border-gray-500'
            )}
          >
            <div className='grid-one-sub1 flex items-center justify-center px-2 text-right text-2xl text-white'>
              Your lecture schedule on the go.
            </div>
            <div className='grid-one-sub2 relative'>
              <Image
                src='/images/timetable.svg'
                alt='Description of Image'
                fill
                objectFit='contain' // Ensures image scales correctly and doesn't overflow
                className='absolute inset-0 px-2 max-sm:py-2'
              />
            </div>
          </div>
          <div
            className={cn(
              styles.gridtwo,
              'flex flex-col rounded-3xl border-2 border-gray-500'
            )}
          >
            <div className='relative flex-1'>
              <Image
                src='/images/microsoft.svg'
                alt='Description of Image'
                fill
                objectFit='contain' // Ensures image scales correctly and doesn't overflow
                className='absolute inset-0 px-2 max-sm:pt-2'
              />
            </div>
            <div className='grid-two-sub1 flex items-center justify-center px-6 py-2 text-2xl text-white lg:py-6'>
              Integrated with your favourite Microsoft apps.
            </div>
          </div>
          <div
            className={cn(
              styles.gridthree,
              'rounded-3xl border-2 border-gray-500'
            )}
          >
            <div className='grid-three-sub2 relative'>
              <Image
                src='/images/datadash.gif'
                alt='Description of Image'
                fill
                objectFit='contain' // Ensures image scales correctly and doesn't overflow
                className='absolute -inset-4 scale-125 px-2 max-sm:py-2'
              />
            </div>
            <div className='grid-three-sub1 flex items-center justify-center px-2 text-right text-2xl text-white lg:pr-12'>
              Real time attendance and grade accesibility.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
