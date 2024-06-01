// 'use client';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import Link from 'next/link';
// import React from 'react';

// export const HeroParallax = ({
//   products,
// }: {
//   products: {
//     title: string;
//     description: string;
//     display: React.ReactNode;
//   }[];
// }) => {
//   const firstRow = products.slice(0, 3);
//   const secondRow = products.slice(3, 7);
//   const thirdRow = products.slice(7, 10);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start'],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   // const translateX = useSpring(
//   //   useTransform(scrollYProgress, [0, 1], [0, 1000]),
//   //   springConfig
//   // );
//   // const translateXReverse = useSpring(
//   //   useTransform(scrollYProgress, [0, 1], [0, -1000]),
//   //   springConfig
//   // );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );
//   return (
//     <div
//       ref={ref}
//       className='relative flex h-[400vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]'
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className=''
//       >
//         <motion.div
//           className={
//             ' mb-20 space-x-8 space-x-reverse ' +
//             (scrollYProgress.get() === 0.2
//               ? 'flex flex-col'
//               : 'flex flex-row-reverse')
//           }
//         >
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               // translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className='mb-20 flex flex-row space-x-8 '>
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               // translate={translateXReverse}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//         <motion.div className='flex space-x-8 space-x-reverse'>
//           {thirdRow.map((product) => (
//             <ProductCard
//               product={product}
//               // translate={translateX}
//               key={product.title}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export const Header = () => {
//   return (
//     <div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
//       <h1 className='text-2xl font-bold md:text-7xl dark:text-white'>
//         Powered by AI
//       </h1>
//       <p className='mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200'>
//         We build beautiful products with the latest technologies and frameworks.
//         We are a team of passionate developers and designers that love to build
//         amazing products.
//       </p>
//     </div>
//   );
// };

// export const ProductCard = ({
//   product,
// }: // translate,
// {
//   product: {
//     title: string;
//     link: string;
//     thumbnail: React.ReactNode;
//   };
//   // translate: MotionValue<number>;
// }) => {
//   return (
//     <motion.div
//       // style={{
//       //   x: translate,
//       // }}
//       // whileHover={{
//       //   y: -20,
//       // }}
//       key={product.title}
//       className='group/product relative h-96 w-[30rem] flex-shrink-0'
//     >
//       <Link
//         href={product.link}
//         className='block group-hover/product:shadow-2xl '
//       >
//         <div className='absolute inset-0 h-full w-full object-cover object-left-top'>
//           {product.thumbnail}{' '}
//         </div>
//       </Link>
//       <div className='pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80'></div>
//       <h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
//         {product.title}
//       </h2>
//     </motion.div>
//   );
// };
