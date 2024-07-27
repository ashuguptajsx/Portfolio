import React from "react";
import profileImage from "../assets/image.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Main = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mb-10 lg:mb-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-4 sm:mx-10">
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start lg:pr-10">
          <div className="flex flex-col items-center lg:items-start lg:justify-start justify-center h-full lg:h-auto">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-thin font-mono-cutive tracking-tight mt-6 mb-10 lg:ml-28 text-white sm:mt-0 flex flex-col items-center justify-center lg:items-start lg:justify-start"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
            >
              <span className="block">
                <Typewriter
                  words={["Hey, I'm"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typewriter
                  words={["Aashutosh Gupta."]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>
            <motion.span
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6 lg:ml-28"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
            >
              Full Stack Developer
            </motion.span>
          </div>
          <motion.p
            className="text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-md lg:max-w-xl lg:ml-28 mb-6 san-serif inter bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
          >
            Welcome to my <motion.span className="font-extrabold">portfolio!</motion.span>
          </motion.p>
          <motion.a
            className="mt-6 lg:ml-28 py-2 px-4 bg-blue-600 text-black font-semibold rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            href="mailto:ashugupta1403@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
          >
            Hire Me
          </motion.a>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:mr-28 mt-10 lg:mt-0">
          <motion.div
            className="relative inline-flex group h-60 w-60 sm:h-80 sm:w-80"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileTap={{ scale: 1.2 }}
          >
            <div className="absolute transition-all duration-700 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-400 animate-tilt"></div>
            <div className="relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 h-full w-full">
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
