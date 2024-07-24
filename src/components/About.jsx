import React from "react";
import { motion } from "framer-motion";
import image from "../assets/developer.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-16 lg:ml-52 font-In-ter mr-2"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-white mr-14 lg:mr-64"
        ></motion.div>
      </div>

      <div className="flex flex-col items-center mt-24 px-4 lg:px-0">
        <div className="flex justify-center mb-8">
          <img src={image} alt="Developer" className="w-48 h-48 rounded-full object-cover" />
        </div>
        <p className="text-white text-center font-In-ter font-extrabold text-sm lg:text-lg lg:mx-96">
          As a seasoned Full Stack Developer, I possess a comprehensive skill set that spans both front-end and back-end technologies. My expertise includes creating seamless, user-friendly interfaces with modern frameworks and libraries such as React, while also ensuring robust, scalable server-side functionality using Node.js and Express. With a deep understanding of databases, including SQL and NoSQL.
        </p>
      </div>
    </div>
  );
};

export default About;
