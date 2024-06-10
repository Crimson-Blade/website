'use client';
import { motion } from 'framer-motion';
import React from 'react';

export const Graph = ({
  products,
}: {
  products: {
    title: string;
    description: string;
  }[];
}) => {
  const ref = React.useRef(null);

  const variants = {
    fromLeft: {
      initial: { x: -100 },
      animate: { x: 0 },
    },
    fromRight: {
      initial: { x: 100 },
      animate: { x: 0 },
    },
    fromUp: {
      initial: { y: 100 },
      animate: { y: 0 },
    },
    fromDown: {
      initial: { y: 100 },
      animate: { y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  return (
    <div
      ref={ref}
      className='relative top-40 z-40 flex h-[120vh] flex-col items-center self-auto overflow-hidden pb-28 antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <div>
        <div className='flex flex-col '>
          <div className='flex gap-4 p-4'>
            <motion.div
              variants={variants.fromLeft}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='group relative flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-44 md:p-10 md:text-xl lg:-left-32 lg:top-16'
            >
              {products[0].title}
              <DescriptionBox products={products[0]} translate={-400} />
            </motion.div>

            <motion.div
              variants={variants.fromUp}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='group flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-48 md:p-10 md:text-xl'
            >
              {products[1].title}
            </motion.div>
            <motion.div
              variants={variants.fromRight}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className='group relative flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-44 md:p-10 md:text-xl lg:-right-32 lg:top-16'
            >
              {products[2].title}
              <DescriptionBox products={products[2]} translate={170} />
            </motion.div>
          </div>
          <motion.div className='flex justify-around p-4 lg:p-4'>
            <motion.svg
              variants={variants.fromLeft}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              width='44'
              height='55'
              viewBox='0 0 44 55'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:h-auto md:w-auto lg:block'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M41.9286 6.91518L41.9286 54.9814H43.9097L43.9097 4.93407L10.7759 4.93407V0.205673L0.870419 5.92463L10.7759 11.6436V6.91518L41.9286 6.91518Z'
                fill='#FFFEFE'
              />
            </motion.svg>
            <motion.svg
              variants={variants.fromUp}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              width='11'
              height='63'
              viewBox='0 0 11 63'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 md:h-auto md:w-auto'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0.771118 8.93481L5.46646 0.802246L10.1618 8.93481H6.27972V54.4772H10.1618L5.46646 62.6098L0.771118 54.4772H4.6532V8.93481H0.771118Z'
                fill='white'
              />
            </motion.svg>
            <motion.svg
              variants={variants.fromRight}
              initial='initial'
              whileInView='animate'
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              width='42'
              height='56'
              viewBox='0 0 42 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:h-auto md:w-auto lg:block'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.34024 7.13662L2.34024 55.2029H0.359131L0.359131 5.15551L31.9355 5.15551L31.9355 0.427109L41.841 6.14606L31.9355 11.865V7.13662L2.34024 7.13662Z'
                fill='white'
              />
            </motion.svg>
          </motion.div>
        </div>
        <motion.div
          variants={variants.fromUp}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='group mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:p-8'
        >
          <div className='mx-auto text-3xl font-semibold'>
            {products[3].title}
            <DescriptionBox products={products[3]} translate={450} />
          </div>
        </motion.div>
      </div>
      <motion.div>
        <motion.div className='flex w-full justify-around p-4'>
          <motion.svg
            variants={variants.fromLeft}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            width='11'
            height='63'
            viewBox='0 0 11 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.771118 8.93481L5.46646 0.802246L10.1618 8.93481H6.27972V54.4772H10.1618L5.46646 62.6098L0.771118 54.4772H4.6532V8.93481H0.771118Z'
              fill='white'
            />
          </motion.svg>
          <motion.svg
            width='11'
            height='63'
            viewBox='0 0 11 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.771118 8.93481L5.46646 0.802246L10.1618 8.93481H6.27972V54.4772H10.1618L5.46646 62.6098L0.771118 54.4772H4.6532V8.93481H0.771118Z'
              fill='white'
            />
          </motion.svg>
          <motion.svg
            variants={variants.fromRight}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            width='11'
            height='63'
            viewBox='0 0 11 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.771118 8.93481L5.46646 0.802246L10.1618 8.93481H6.27972V54.4772H10.1618L5.46646 62.6098L0.771118 54.4772H4.6532V8.93481H0.771118Z'
              fill='white'
            />
          </motion.svg>
        </motion.div>
        <motion.div
          variants={variants.fromRight}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='group flex  w-full items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-8 text-center text-white shadow-md shadow-white xl:p-2'
        >
          <DescriptionBox products={products[4]} translate={600} />
          <div className='relative mx-auto text-3xl font-semibold lg:left-36'>
            {products[4].title}
          </div>
          <motion.div
            variants={variants.fromLeft}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative -left-[37rem] hidden xl:flex'
          >
            <motion.div className='relative -left-6 flex h-24 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-56 md:p-10'>
              {products[5].title}
            </motion.div>
            <svg
              width='76'
              height='13'
              viewBox='0 0 76 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='relative -left-2 top-10'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M9.91504 12.3311L0.00952148 6.6121L9.91504 0.893143V5.62155L75.2915 5.62155V7.60265L9.91504 7.60265V12.3311Z'
                fill='white'
              />
            </svg>
          </motion.div>
        </motion.div>
        <motion.div className='flex w-full justify-center py-4'>
          <motion.svg
            width='11'
            height='63'
            viewBox='0 0 11 63'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.771118 8.93481L5.46646 0.802246L10.1618 8.93481H6.27972V54.4772H10.1618L5.46646 62.6098L0.771118 54.4772H4.6532V8.93481H0.771118Z'
              fill='white'
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      <div className='flex flex-col gap-4'>
        <motion.div
          variants={variants.fromDown}
          initial='initial'
          whileInView='animate'
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='group mx-auto flex w-full items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:p-8'
        >
          <DescriptionBox products={products[6]} translate={600} />
          <div className=' mx-auto text-3xl font-semibold'>
            {products[6].title}
          </div>
        </motion.div>
        <motion.div className='flex w-full justify-around'>
          <motion.svg
            variants={variants.fromLeft}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            width='12'
            height='77'
            viewBox='0 0 12 77'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.9286 66.2299V0.853516H6.9097V66.2299H11.6381L5.91915 76.1355L0.200195 66.2299H4.9286Z'
              fill='white'
            />
          </motion.svg>

          <motion.svg
            variants={variants.fromDown}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            width='12'
            height='77'
            viewBox='0 0 12 77'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.9286 66.2299V0.853516H6.9097V66.2299H11.6381L5.91915 76.1355L0.200195 66.2299H4.9286Z'
              fill='white'
            />
          </motion.svg>

          <motion.svg
            variants={variants.fromRight}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            width='12'
            height='77'
            viewBox='0 0 12 77'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-14 w-14'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.9286 66.2299V0.853516H6.9097V66.2299H11.6381L5.91915 76.1355L0.200195 66.2299H4.9286Z'
              fill='white'
            />
          </motion.svg>
        </motion.div>
        <div className='flex justify-between gap-6'>
          <motion.div
            variants={variants.fromLeft}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-44 md:p-10 md:text-xl'
          >
            {products[7].title}
          </motion.div>
          <motion.div
            variants={variants.fromDown}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-48 md:p-10 md:text-xl'
          >
            {products[8].title}
          </motion.div>
          <motion.div
            variants={variants.fromRight}
            initial='initial'
            whileInView='animate'
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='flex h-16 w-24 items-center rounded-xl border-2 border-gray-600 bg-[#d4d4d4] bg-opacity-10 p-4 text-center text-white shadow-md shadow-white md:w-44 md:p-10 md:text-xl'
          >
            {products[9].title}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const DescriptionBox = ({
  products,
  translate,
}: {
  products: {
    title: string;
    description: string;
  };
  translate: number;
}) => {
  return (
    <motion.div
      className='absolute -mt-6 flex h-[10rem] w-[20rem] flex-col gap-2 rounded-xl bg-gray-400 p-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
      style={{ x: translate }}
      transition={{ duration: 1 }}
    >
      <div className='text-primary-600 text-2xl font-semibold  '>
        {products.title}
      </div>
      <div className='text-center text-base text-black '>
        {products.description}
      </div>
    </motion.div>
  );
};
