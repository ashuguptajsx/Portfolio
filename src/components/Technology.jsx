import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const Technology = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-16 lg:ml-52 font-Inter mr-2 sm:ml-2"
        >
          Technologies
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-white mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>
      <div className='flex flex-wrap justify-center items-center h-auto py-10'>
        <FaReact className='text-blue-500 text-4xl sm:text-6xl mx-2 border border-white p-2'/>
        <AiOutlineHtml5 className='text-orange-500 text-4xl sm:text-6xl mx-2 border border-white p-2'/>
        <FaCss3Alt className='text-blue-600 text-4xl sm:text-6xl mx-2 border border-white p-2'/>
        <SiExpress className='text-white text-4xl sm:text-6xl mx-2 border border-white p-2'/>
        <DiMongodb className='text-green-400 text-4xl sm:text-6xl mx-2 border border-white p-2'/>
        <FaNodeJs className='text-green-500 text-4xl sm:text-6xl mx-2 border border-white p-2'/>
      </div>
    </div>
  )
}

export default Technology;
