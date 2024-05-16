import { motion } from 'framer-motion';
import React from 'react';
// type Nodes = number[];

// function ClickablePoints({
//   onPointClick,
// }: {
//   onPointClick: (point: number) => void;
// }) {
//   return (
//     <div className='mx-auto mt-28 flex w-full flex-col justify-center gap-10'>
//       <motion.button
//         className='flex items-center gap-2'
//         onClick={() => onPointClick(1)}
//         whileHover={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
//       >
//         <span className='rounded-full bg-white p-4 font-semibold text-black'>
//           1
//         </span>
//         <p className='text-3xl'>first part of framework</p>
//       </motion.button>
//       <motion.button
//         className='flex items-center gap-2'
//         onClick={() => onPointClick(2)}
//         whileHover={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
//       >
//         <span className='rounded-full bg-white p-4 font-semibold text-black'>
//           2
//         </span>
//         <p className='text-3xl'>Second part of framework</p>
//       </motion.button>
//       <motion.button
//         className='flex items-center gap-2'
//         onClick={() => onPointClick(3)}
//         whileHover={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
//       >
//         <span className='rounded-full bg-white p-4 font-semibold text-black'>
//           3
//         </span>
//         <p className='text-3xl'>Third part of framework</p>
//       </motion.button>
//       <motion.button
//         className='flex items-center gap-2'
//         onClick={() => onPointClick(4)}
//         whileHover={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
//       >
//         <span className='rounded-full bg-white p-4 font-semibold text-black'>
//           4
//         </span>
//         <p className='text-3xl'>Fourth part of framework</p>
//       </motion.button>
//       <motion.button
//         className='flex items-center gap-2'
//         onClick={() => onPointClick(5)}
//         whileHover={{ y: [0, -10, 0, -5, 0, -2.5, 0] }}
//       >
//         <span className='rounded-full bg-white p-4 font-semibold text-black'>
//           5
//         </span>
//         <p className='text-3xl'>Fifth part of framework</p>
//       </motion.button>
//     </div>
//   );
// }
function Graph({ highlightedNumber }: { highlightedNumber: number }) {
  // const [highlightedNodes, setHighlightedNodes] = useState<Nodes>([]);

  // const handlePointClick = (point: number) => {
  //   let nodes: Nodes = [];
  //   switch (point) {
  //     case 1:
  //       nodes = [1];
  //       break;
  //     case 2:
  //       nodes = [2, 3, 4];
  //       break;
  //     case 3:
  //       nodes = [5, 6];
  //       break;
  //     case 4:
  //       nodes = [7];
  //       break;
  //     case 5:
  //       nodes = [8, 9, 10];
  //       break;
  //     default:
  //       break;
  //   }
  //   setHighlightedNodes(nodes);
  // };
  const description = [
    { id: 1, nodes: ['Student App'] },
    { id: 2, nodes: ['Copilot Stack', 'UpEase Conosle', 'Your App'] },
    { id: 3, nodes: ['UpEase Framework', 'University Data Model'] },
    {
      id: 4,
      nodes: ['Microsoft EDU', 'Office Apps', 'Multi Tenant', 'Micrsoft AD'],
    },
  ];

  return (
    <>
      <div key='1' className='flex flex-col items-center gap-8 '></div>
      {description
        .filter((item) => item.id === highlightedNumber)
        .map((item, id) => (
          <div
            key={id}
            className='flex h-full w-full flex-col justify-around gap-6 rounded-lg   p-6 '
          >
            {item.nodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{
                  x: 1000,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: 'easeInOut',
                }}
                className='flex h-1/4  rounded-lg border border-gray-200 bg-gray-400 p-6 text-center shadow-lg shadow-gray-300'
              >
                <div className='m-auto text-4xl font-bold'>{node}</div>
              </motion.div>
            ))}
          </div>
        ))}
    </>
    // <div className='mx-auto flex h-screen w-2/3 items-start justify-between gap-10 text-white'>
    //   <ClickablePoints onPointClick={handlePointClick} />
    //   <div className='graph flex h-3/4 w-full flex-wrap justify-center gap-x-6 gap-y-8 rounded-3xl border-4 border-gray-900 p-8 text-xl shadow-md shadow-teal-500'>
    //     {[...Array(10)].map((_, index) => (
    //       <div
    //         key={index}
    //         className={`node flex gap-4 rounded-xl
    //         ${[1, 7].includes(index + 1) ? 'w-3/4 ' : 'w-1/4'}
    //         ${[3].includes(index + 1) ? 'w-[40%]' : ''}
    //         ${[5].includes(index + 1) ? 'w-[70%] ' : ''}
    //           flex-row justify-center gap-4 border-b-2 border-l-2 border-r-2 border-t-2 border-b-gray-300 border-l-gray-300 border-r-slate-500 border-t-slate-500 p-2 text-center ${
    //             highlightedNodes.includes(index + 1)
    //               ? 'highlighted flex scale-105 shadow-lg shadow-gray-600 duration-150'
    //               : 'scale-100 opacity-20 '
    //           }`}
    //       >
    //         {nodeDescriptions[index]}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Graph;
