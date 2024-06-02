'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';

export const Graph = ({
  products,
}: {
  products: {
    title: string;
    description1: string;
    description2: string;
    display: React.ReactNode;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 7);
  const thirdRow = products.slice(7, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // const translateX = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, 1000]),
  //   springConfig
  // );
  // const translateXReverse = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, -1000]),
  //   springConfig
  // );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-900, -50]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className='relative flex h-[250vh] flex-col items-center justify-between self-auto overflow-hidden pb-28  antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='mb-18 flex-row-reverse space-x-8 space-x-reverse '>
          {firstRow.map((product) => (
            <>
              <ProductCard
                product={product}
                // translate={translateX}
                key={product.title}
              />
            </>
          ))}
        </motion.div>
        <motion.div className='mb-18 flex flex-row space-x-8 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              // translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-8 space-x-reverse'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              // translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
      <h1 className='text-2xl font-bold md:text-7xl dark:text-white'>
        Powered by AI
      </h1>
      <p className='z-50 mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200'>
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
}: // translate,
{
  product: {
    title: string;
    description1: string;
    description2: string;
    display: React.ReactNode;
  };
  // translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      // style={{
      //   x: translate,
      // }}
      // whileHover={{
      //   y: -20,
      // }}
      key={product.title}
      className='group relative my-auto flex h-[30rem] max-w-[30rem] flex-shrink-0 items-center justify-center duration-300 hover:scale-125 hover:cursor-pointer'
    >
      <div className=''>{product.display} </div>
      <div className='bg-blue border-primary-900 absolute left-0 flex h-48 w-[20rem] items-center border-t-2 p-4  text-white opacity-0 duration-300 group-hover:-translate-x-[25rem]  group-hover:opacity-100'>
        <p className='flex flex-col'>
          <span className='text-primary-800 text-3xl font-semibold'>
            {product.title}
          </span>
          {product.description1}
        </p>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className=' h-12 w-12 text-white drop-shadow-md '
          >
            <path
              fill='white'
              d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
            />
          </svg>
        </div>
      </div>

      <div className='bg-blue border-primary-900 absolute right-0 flex h-48 w-[20rem] items-center gap-2 border-t-2 p-4  text-white opacity-0 duration-300 group-hover:translate-x-[25rem]  group-hover:opacity-100'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className=' h-12 w-12 text-white drop-shadow-md '
          >
            <path
              fill='white'
              d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
            />
          </svg>
        </div>
        <p className='flex flex-col'>
          <span className='text-primary-800 text-3xl font-semibold'>
            {product.title}
          </span>
          {product.description2}
        </p>
      </div>
    </motion.div>
  );
};
