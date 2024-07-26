import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="my-10 sm:my-10">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-14 lg:ml-52 font-Inter mr-2 sm:ml-2"
          whileTap={{ scale: 1.05 }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-grow border-t-4 border-pink-300 mr-14 mt-1 lg:mr-64"
        ></motion.div>
      </div>

      <div className="flex flex-col mt-14 lg:m-28 justify-center items-center">
        <div className="h-auto min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] bg-gray-900 w-11/12 sm:w-3/5 md:w-3/4 lg:w-2/3 rounded-2xl m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Zenith
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              A MERN chat app enabling seamless person-to-person communication
              with real-time messaging capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: "HTML", color: "bg-orange-500" },
                { name: "CSS", color: "bg-blue-500" },
                { name: "JavaScript", color: "bg-yellow-500" },
                { name: "React.js", color: "bg-cyan-500" },
                { name: "MongoDB", color: "bg-green-500" },
                { name: "Express.js", color: "bg-red-500" },
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 ${
                    tech.color
                  } bg-opacity-20 text-white rounded-full text-xs sm:text-sm border border-opacity-40 ${tech.color.replace(
                    "bg-",
                    "border-"
                  )}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://github.com/ashu-1403/Zenith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              GitHub
            </a>
            <a
              href="https://zenith-hdwo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="h-auto min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] bg-gray-900 w-11/12 sm:w-3/5 md:w-3/4 lg:w-2/3 rounded-2xl m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Portfolio Website
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              It is my personal Portfolio website.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: "HTML", color: "bg-orange-500" },
                { name: "CSS", color: "bg-blue-500" },
                { name: "JavaScript", color: "bg-yellow-500" },
                { name: "React.js", color: "bg-cyan-500" },
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 ${
                    tech.color
                  } bg-opacity-20 text-white rounded-full text-xs sm:text-sm border border-opacity-40 ${tech.color.replace(
                    "bg-",
                    "border-"
                  )}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://github.com/ashu-1403/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              GitHub
            </a>
            <a
              href="http://my-project-flax-omega.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="h-auto min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] bg-gray-900 w-11/12 sm:w-3/5 md:w-3/4 lg:w-2/3 rounded-2xl m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Weather App
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">
              It is a Weather App which I have created using the OpenWeather API.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: "HTML", color: "bg-orange-500" },
                { name: "CSS", color: "bg-blue-500" },
                { name: "JavaScript", color: "bg-yellow-500" },
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 ${
                    tech.color
                  } bg-opacity-20 text-white rounded-full text-xs sm:text-sm border border-opacity-40 ${tech.color.replace(
                    "bg-",
                    "border-"
                  )}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <a
              href="https://github.com/ashu-1403/Weather_application"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              GitHub
            </a>
            <a
              href="https://weather-application-drab-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
