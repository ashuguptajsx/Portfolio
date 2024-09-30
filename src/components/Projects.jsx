import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code,  Zap, BookOpen, MessageCircle, Cloud, BarChart3 } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  const tapEffect = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400, damping: 10 },
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
      title: "Printify-Wbsite",
      description: "printify website home page.",
      techStack: [ "Tailwind CSS", "React.js"],
      github: "https://github.com/ashu-1403/home-page",
      demo: "https://home-page-two-smoky.vercel.app/",
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
    {
      title: "Admin Panel",
      description: "An admin panel with CRUD operations and graphical representation of user registration data using Chart.js.",
      techStack: ["React.js", "TailwindCSS", "Chart.js", "JSON Server"],
      github: "https://github.com/ashu-1403/admin-panel",
      // demo: "https://admin-panel-live.vercel.app",
      icon: <BarChart3 className="w-12 h-12 text-green-400" />,
    },
    {
      title: "Chat-Gemini",
      description: "An interactive Ai chatbot building with the Google's Ai generative api.",
      techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "mongodb"],
      github: "https://github.com/ashu-1403/chat-gpt",
      demo: "https://chat-gpt-twul.vercel.app/",
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
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
      "Chart.js": "text-purple-500",
      "JSON Server": "text-gray-500",
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
            whileTap={tapEffect}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
                    <motion.span
                      key={techIndex}
                      variants={techBadgeVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileTap={tapEffect}
                      className={`px-3 py-1 ${getTechColor(tech)} bg-opacity-20 rounded-full text-sm font-medium border border-opacity-40 flex items-center`}
                    >
                      <span className={`w-2 h-2 rounded-full ${getTechColor(tech).replace('text-', 'bg-')} mr-2`}></span>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <motion.div
              className="bg-gray-700 px-6 py-4 flex justify-between items-center"
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={tapEffect}
                className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center group"
              >
                <Github size={20} className="mr-2 group-hover:animate-bounce" />
                <span className="font-medium">GitHub</span>
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={tapEffect}
                className="text-white hover:text-pink-400 transition-colors duration-200 flex items-center group"
              >
                <ExternalLink size={20} className="mr-2 group-hover:animate-pulse" />
                <span className="font-medium">Live Demo</span>
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
