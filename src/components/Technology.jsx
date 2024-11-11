import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCss3Alt, FaNodeJs, FaGithub, FaJava, FaJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress, SiC, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Technology = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping:20
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      rotate: -15,
      transition: { duration: 0.3 }
    }
  };

  const technologies = [
    { Icon: FaReact, color: 'text-blue-500', name: 'React' },
    { Icon: AiOutlineHtml5, color: 'text-orange-500', name: 'HTML5' },
    { Icon: FaCss3Alt, color: 'text-blue-600', name: 'CSS3' },
    { Icon: FaJs, color: 'text-yellow-500', name: 'JavaScript' }, // Added JavaScript
    { Icon: SiExpress, color: 'text-white', name: 'Express' },
    { Icon: DiMongodb, color: 'text-green-400', name: 'MongoDB' },
    { Icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
    { Icon: SiC, color: 'text-blue-300', name: 'C' },
    { Icon: FaJava, color: 'text-red-500', name: 'Java' },
    { Icon: FaGithub, color: 'text-gray-300', name: 'GitHub' },
    { Icon: SiNextdotjs, color: 'text-white', name: 'Next.js' },
    { Icon: SiTailwindcss, color: 'text-cyan-400', name: 'Tailwind CSS' },
  ];

  return (
    <div ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
             Skills
            Skills
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          {technologies.map(({ Icon, color, name }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className={`${color} p-4 rounded-full bg-gray-800 shadow-lg`}
              >
                <Icon className="text-4xl sm:text-5xl md:text-6xl" />
              </motion.div>
              <motion.p 
                variants={itemVariants}
                className="mt-2 text-gray-300 text-sm sm:text-base"
              >
                {name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technology;
