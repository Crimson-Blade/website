'use client';

import Head from 'next/head';
import * as React from 'react';

import AmsPlatform from '@/app/sections/ams-section';
import Contact from '@/app/sections/contact-section';
import FrameworkSection from '@/app/sections/framework-section';
import Hero from '@/app/sections/hero-section';
import IntroductionAms from '@/app/sections/introduction-ams-section';
import IntroductionFramework from '@/app/sections/introduction-framework-section';
import IntroductionSla from '@/app/sections/introduction-sla-section';
import StudentApp from '@/app/sections/sla-section';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <main className='snap-y snap-mandatory'>
      <Head>
        <title>UpEase</title>
      </Head>
      <section id='upease-section-1'>
        <Hero />
      </section>
      <div className='spacer z-0 h-screen'></div>
      <section className='bg-black' id='upease-section-2'>
        <IntroductionFramework />
      </section>
      <section className=' bg-black' id='upease-section-3'>
        <FrameworkSection />
      </section>
      <section className=' bg-black' id='upease-section-3'>
        <IntroductionSla />
      </section>
      <section className='bg-black' id='upease-section-4'>
        <StudentApp />
      </section>
      <section className=' bg-black' id='upease-section-5'>
        <IntroductionAms />
      </section>
      <section className='bg-black' id='upease-section-6'>
        <AmsPlatform />
      </section>
      {/* <section
        className='bg-gradient-to-b from-[#F2F2F2] to-white '
        id='upease-section-6'
      >
        <Pricing />s
      </section> */}
      <section className='z-50 bg-white' id='upease-section-7'>
        <Contact />
      </section>
    </main>
  );
}
