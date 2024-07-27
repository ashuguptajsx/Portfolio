import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "Zenith",
      description:
        "A MERN chat app enabling seamless person-to-person communication with real-time messaging capabilities.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Express.js"],
      github: "https://github.com/ashu-1403/Zenith",
      demo: "https://zenith-hdwo.onrender.com",
    },
    {
      title: "Portfolio Website",
      description: "It is my personal Portfolio website.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/ashu-1403/Portfolio",
      demo: "http://aashutoshgupta.vercel.app",
    },
    {
      title: "Weather App",
      description: "It is a Weather App which I have created using the OpenWeather API.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashu-1403/Weather_application",
      demo: "https://weather-application-drab-five.vercel.app",
    },
  ];

  function getTechColor(tech) {
    const colorMap = {
      HTML: "orange",
      CSS: "blue",
      JavaScript: "yellow",
      "React.js": "cyan",
      MongoDB: "green",
      "Express.js": "red",
    };
    return colorMap[tech] || "gray";
  }

  return (
    <div className="my-10 sm:my-10" ref={ref}>
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-14 lg:ml-52 font-Inter mr-2 sm:ml-2"
          whileTap={{ scale: 1.05 }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-pink-300 mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>

      <div className="flex flex-col mt-14 lg:m-28 justify-center items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-auto min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] bg-gray-900 w-11/12 sm:w-3/5 md:w-3/4 lg:w-2/3 rounded-2xl m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
                {project.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 bg-${getTechColor(tech)}-500 bg-opacity-20 text-white rounded-full text-xs sm:text-sm border border-opacity-40 border-${getTechColor(tech)}-500`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
