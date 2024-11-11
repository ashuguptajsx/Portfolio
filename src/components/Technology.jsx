import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaCss3Alt, FaNodeJs, FaGithub, FaJava, FaJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiExpress, SiC, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const SkillsShowcase = () => {
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

  const technologies = [
    { Icon: FaReact, color: 'text-blue-500', name: 'React', level: 90 },
    { Icon: AiOutlineHtml5, color: 'text-orange-500', name: 'HTML5', level: 95 },
    { Icon: FaCss3Alt, color: 'text-blue-600', name: 'CSS3', level: 85 },
    { Icon: FaJs, color: 'text-yellow-500', name: 'JavaScript', level: 88 },
    { Icon: SiExpress, color: 'text-white', name: 'Express', level: 82 },
    { Icon: DiMongodb, color: 'text-green-400', name: 'MongoDB', level: 80 },
    { Icon: FaNodeJs, color: 'text-green-500', name: 'Node.js', level: 85 },
    { Icon: SiC, color: 'text-blue-300', name: 'C', level: 75 },
    { Icon: FaJava, color: 'text-red-500', name: 'Java', level: 78 },
    { Icon: FaGithub, color: 'text-gray-300', name: 'GitHub', level: 92 },
    { Icon: SiNextdotjs, color: 'text-white', name: 'Next.js', level: 86 },
    { Icon: SiTailwindcss, color: 'text-cyan-400', name: 'Tailwind CSS', level: 88 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  return (
    <div ref={ref} className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Proficiency
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">Expertise across various technologies</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid gap-6"
        >
          {technologies.map(({ Icon, color, name, level }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`${color} p-3 rounded-lg bg-gray-700/50 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-gray-200 font-medium">{name}</h3>
                    <span className="text-gray-400 text-sm">{level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      custom={level}
                      variants={progressVariants}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsShowcase;