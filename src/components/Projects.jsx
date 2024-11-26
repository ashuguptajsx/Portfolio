import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code, Zap, BookOpen, MessageCircle, Cloud, BarChart3, MapPin } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }       
    }
  };

  const projects = [
    {
      title: "Zenith",
      description: "A MERN chat app enabling seamless person-to-person communication with real-time messaging capabilities.",
      techStack: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Express.js"],
      github: "https://github.com/ashu-1403/Zenith",
      demo: "https://zenith-hdwo.onrender.com",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Printify-Website",
      description: "printify website home page.",
      techStack: ["Tailwind CSS", "React.js"],
      github: "https://github.com/ashu-1403/home-page",
      demo: "https://home-page-two-smoky.vercel.app/",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Weather App",
      description: "A weather application created using the OpenWeather API.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ashu-1403/Weather_application",
      demo: "https://weather-application-drab-five.vercel.app",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "E-Learning Platform",
      description: "A responsive frontend responsive website of the e-learning platform.",
      techStack: ["React.js", "Nextjs", "TailwindCSS"],
      github: "https://github.com/ashu-1403/e_learning_website",
      demo: "https://learnwithskillhub.vercel.app",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Admin Panel",
      description: "An admin panel with CRUD operations and graphical representation of user registration data using Chart.js.",
      techStack: ["React.js", "TailwindCSS", "Chart.js", "JSON Server"],
      github: "https://github.com/ashu-1403/admin-panel",
      demo: null, // No demo link for this project
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Chat-Gemini",
      description: "An interactive AI chatbot building with Google's AI generative API.",
      techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "mongodb"],
      github: "https://github.com/ashu-1403/chatGemini",
      demo: "https://chat-gemini-dun-one.vercel.app/",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "TripMyWay",
      description: "A trip planner and full-stack app using Firebase for backend, Gemini APIs for itinerary generation, and Google Maps for location services.",
      techStack: ["Firebase", "React.js", "TailwindCSS", "Gemini API", "Google Maps"],
      github: "https://github.com/ashu-1403/TripMyWay",
      demo: "https://tripmyway.vercel.app",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-red-400 to-red-600"
    }
  ];

  const getTechColor = (tech) => {
    const colorMap = {
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      JavaScript: "bg-yellow-400",
      "React.js": "bg-cyan-400",
      MongoDB: "bg-green-500",
      "Express.js": "bg-red-500",
      "Node.js": "bg-lime-500",
      "Nextjs": "bg-white",
      "TailwindCSS": "bg-cyan-400",
      "Chart.js": "bg-purple-500",
      "JSON Server": "bg-gray-500",
      Firebase: "bg-yellow-500",
      "Gemini API": "bg-indigo-500",
      "Google Maps": "bg-green-600",
    };
    return `${colorMap[tech] || "bg-gray-400"} bg-opacity-20`;
  };

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg">A collection of my recent work and experiments</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 text-xs font-medium text-gray-300 rounded-full border border-gray-700/50 ${getTechColor(tech)} transition-all duration-300 hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-800/50 border-t border-gray-700/50">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(project.github);
                }}
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 group cursor-pointer"
              >
                <Github className="w-5 h-5 group-hover:animate-bounce" />
                <span>Source Code</span>
              </a>
              
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(project.demo);
                  }}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-400 transition-all duration-300 group cursor-pointer"
                >
                  <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;