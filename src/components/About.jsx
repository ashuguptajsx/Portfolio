import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import image from "../assets/developer2.jpg";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.4 } },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial="hidden"
          animate={controls}
          variants={headingVariants}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8"></div>
          <ChevronDown className="text-gray-400 animate-bounce" size={32} />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75"></div>
              <motion.img
                src={image}
                alt="Developer"
                className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white relative z-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="w-full lg:w-2/3 flex flex-col items-center lg:items-start"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <motion.p
              className="text-gray-300 text-xl leading-relaxed mb-6 text-center lg:text-left"
              variants={textChildVariants}
            >
              As a <span className="font-bold text-white">Full Stack Developer</span>, I excel in creating intuitive interfaces and robust back-end solutions. My expertise spans front-end frameworks, server-side technologies, and database systems.
            </motion.p>
            <motion.p
              className="text-gray-300 text-xl leading-relaxed text-center lg:text-left"
              variants={textChildVariants}
            >
              Driven by a passion for clean code and user-centric design, I craft seamless digital experiences that exceed expectations. My adaptability keeps me at the forefront of web development, ready to tackle any challenge with innovative solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
