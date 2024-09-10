import React, { useState } from "react";
import profileImage from "../assets/image.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Main = () => {
  const [tapped, setTapped] = useState(false);

  return (
    <div className="py-64 pt-36 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <motion.div 
          className="text-center lg:text-left space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white space-y-1">
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typewriter
                words={["Hey, I'm"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Typewriter
                words={["Aashutosh Gupta."]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.span>
          </h1>
          <motion.p 
            className="text-xl sm:text-2xl font-semibold text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.p 
            className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
          >
            Welcome to my <span className="font-bold text-white">portfolio!</span> Explore my projects and skills in web development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <a
              href="mailto:ashugupta1403@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 lg:mt-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: tapped ? 0 : -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={() => setTapped(true)}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
