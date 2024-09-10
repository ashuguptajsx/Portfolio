import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Zap, BookOpen, MessageCircle, Cloud } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "Zenith",
      description: "A MERN chat app enabling seamless person-to-person communication with real-time messaging capabilities.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Express.js"],
      github: "https://github.com/ashu-1403/Zenith",
      demo: "https://zenith-hdwo.onrender.com",
      icon: <MessageCircle className="w-12 h-12 text-blue-400" />, 
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing projects and skills.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      github: "https://github.com/ashu-1403/Portfolio",
      demo: "http://aashutoshgupta.vercel.app",
      icon: <Code className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Weather App",
      description: "A weather application created using the OpenWeather API.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashu-1403/Weather_application",
      demo: "https://weather-application-drab-five.vercel.app",
      icon: <Cloud className="w-12 h-12 text-blue-400" />, 
    },
    {
      title: "E-Learning Platform",
      description: "A responsive frontend responsive website of the e-learning platform.",
      techStack: ["React.js", "Nextjs", "TailwindCSS"],
      github: "https://github.com/ashu-1403/e_learning_website",
      demo: "https://learnwithskillhub.vercel.app",
      icon: <BookOpen className="w-12 h-12 text-pink-400" />,
    },
  ];

  function getTechColor(tech) {
    const colorMap = {
      HTML: "text-orange-500",
      CSS: "text-blue-500",
      JavaScript: "text-yellow-400",
      "React.js": "text-cyan-400",
      MongoDB: "text-green-500",
      "Express.js": "text-red-500",
      "Node.js": "text-lime-500",
      "Nextjs": "text-white",
      "TailwindCSS": "text-cyan-400",
    };
    return colorMap[tech] || "text-gray-400";
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="mt-6 h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {project.icon}
                <h2 className="text-2xl font-bold text-white ml-4">{project.title}</h2>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${getTechColor(tech)} bg-opacity-20 rounded-full text-sm font-medium border border-opacity-40 flex items-center`}
                    >
                      <span className={`w-2 h-2 rounded-full ${getTechColor(tech).replace('text-', 'bg-')} mr-2`}></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-700 px-6 py-4 flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center group"
              >
                <Github size={20} className="mr-2 group-hover:animate-bounce" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-200 flex items-center group"
              >
                <ExternalLink size={20} className="mr-2 group-hover:animate-pulse" />
                <span className="font-medium">Live Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
