import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [controls, isVisible]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div ref={ref} className='mt-10'>
      <div className='flex items-center justify-center'>
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-14 lg:ml-48  font-Inter mr-2 sm:ml-2"
        >
          Technologies
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="flex-grow border-t-4 border-pink-300  mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className='flex flex-wrap justify-center items-center h-auto mt-12 lg:mt-36 lg:mb-36'
      >
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
            variants={{
              ...iconVariants,
              ...itemVariants
            }}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.3 }}
          >
            <Icon className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technology;