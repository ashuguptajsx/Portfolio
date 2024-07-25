import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 15 },
  tap: { scale: 1.4, rotate: 0 }
};

const Technology = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-14 lg:ml-48  font-Inter mr-2 sm:ml-2"
        >
          Technologies
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-pink-300  mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>
      <div className='flex flex-wrap justify-center items-center h-auto mt-12 lg:mt-36 lg:mb-36'>
        {[
          { Icon: FaReact, color: 'text-blue-500' },
          { Icon: AiOutlineHtml5, color: 'text-orange-500' },
          { Icon: FaCss3Alt, color: 'text-blue-600' },
          { Icon: SiExpress, color: 'text-white' },
          { Icon: DiMongodb, color: 'text-green-400' },
          { Icon: FaNodeJs, color: 'text-green-500' }
        ].map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className={`mx-2 ${color}`}
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.3 }}
          >
            <Icon className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl' />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
