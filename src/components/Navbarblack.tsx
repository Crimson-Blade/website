import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const NavbarBlack: React.FC = () => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.nav
      className='sticky top-10 z-50 mx-auto w-full md:text-lg'
      ref={targetRef}
      style={{ opacity }}
    >
      <div className='container mx-auto flex w-fit items-center justify-center rounded-full border border-gray-500 bg-[#252424] p-4  capitalize text-white'>
        <Link
          href='#upease-section-1'
          className=' mx-1.5 border-b-2 border-blue-500 border-transparent hover:border-blue-500 hover:text-gray-200 sm:mx-6'
        >
          UpEase
        </Link>

        <Link
          href='#upease-section-3'
          className='mx-1.5 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-200 sm:mx-6'
        >
          Products
        </Link>

        <Link
          href='#upease-section-7'
          className='mx-1.5 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-200 sm:mx-6'
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavbarBlack;
