import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/developer.jpg";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-10">
      <div className="flex items-center justify-center">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={variants}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-16 lg:ml-52 font-Inter mr-2 sm:ml-2"
        >
          About Me
        </motion.h1>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex-grow border-t-4 border-white mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>
      
      <div className="flex flex-col items-center mt-24 px-4 lg:px-0">
        <motion.img
          src={image}
          alt="Developer"
          initial="hidden"
          animate={controls}
          variants={variants}
          className="w-64 h-60 rounded-full object-cover mb-8"
        />
        <motion.p
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-white text-center font-Inter font-extrabold text-sm lg:text-lg lg:mx-96"
        >
          As a seasoned Full Stack Developer, I possess a comprehensive skill set that spans both front-end and back-end technologies. My expertise includes creating seamless, user-friendly interfaces with modern frameworks and libraries such as React, while also ensuring robust, scalable server-side functionality using Node.js and Express. With a deep understanding of databases, including SQL and NoSQL.
        </motion.p>
      </div>
    </div>
  );
};

export default About;