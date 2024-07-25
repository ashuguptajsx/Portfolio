import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  return (
    <div className="my-10 sm:my-10">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-14 lg:ml-52 font-Inter mr-2 sm:ml-2"
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-pink-300 mr-14 mt-1 lg:mr-64" 
        ></motion.div>
      </div>
      <div className="flex justify-center items-center m-10  lg:mt-0">
        <motion.div
          className="w-96 h-[100vh] sm:h-[100vh] lg:h-[80vh] bg-slate-900 lg:w-[100vh] lg:m-20 sm:m-32 border rounded-2xl p-4 flex flex-col sm:flex-row sm:flex-wrap gap-4"          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex-1 bg-gray-700 p-4 rounded-lg"
            variants={item}
            whileHover={{ scale: 1.05, opacity: 0.9, transition: { duration: 0.5, ease: "easeOut" }}}
          >
            <h1 className="flex justify-center text-center text-white mb-2 font-Lato ">Zenith</h1>
            <p className="text-sm  lg:text-lg flex text-center">It is a MERN chat App in which we can  talk to a user seamlessly</p>
            
          </motion.div>
          
         
          <motion.div
            className="flex-1 bg-gray-700 p-4 rounded-lg"
            variants={item}
            whileHover={{ scale: 1.05, rotate: 0, opacity: 0.9, transition: { duration: 0.5, ease: "easeOut" }}}
          >
            <h1 className="flex justify-center items-center text-white">Weather App</h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
