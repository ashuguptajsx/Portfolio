import React, { useEffect } from "react";
import { Code, Server, Database, Laptop, Brain, Rocket, ChevronDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const skillCards = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      skills: ["Node.js", "Python", "Express"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-150" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex flex-col items-center justify-center mb-20"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8" />
          <ChevronDown className="text-gray-400 animate-bounce" size={32} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-12"
        >
          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-75 blur" />
              <div className="relative p-8 bg-gray-900 rounded-xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a <span className="font-bold text-white">Full Stack Developer</span>, 
                  I excel in creating intuitive interfaces and robust back-end solutions. 
                  My expertise spans front-end frameworks, server-side technologies, and 
                  database systems.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 blur" />
              <div className="relative p-8 bg-gray-900 rounded-xl border border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <Rocket className="w-8 h-8 text-pink-400" />
                  <h3 className="text-2xl font-bold text-white">My Approach</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Driven by a passion for clean code and user-centric design, 
                  I craft seamless digital experiences that exceed expectations. 
                  My adaptability keeps me at the forefront of web development, 
                  ready to tackle any challenge with innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {skillCards.map((card, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-300`} />
                <div className="relative p-6 bg-gray-900/90 backdrop-blur rounded-lg border border-gray-800 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {React.cloneElement(card.icon, { className: "text-gray-300" })}
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {card.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-400">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;   