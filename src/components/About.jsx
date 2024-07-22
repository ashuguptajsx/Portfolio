import React from 'react';
import profileImage from '../assets/image.jpg'; // Replace with the actual image path

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35 " >
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-10 mt-29 lg:mt-24"> {/* Adjusted top margin here */}
        {/* Image Container */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start lg:mr-10 mt-10 lg:mt-0">
          <div className="relative h-80 w-80 overflow-hidden rounded-xl">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-xl border-[6px] border-transparent bg-clip-padding border-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
            {/* Image */}
            <div className="relative h-full w-full rounded-xl overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Text Content Container */}
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start lg:pl-10 mt-10 lg:mt-0">
          <h2 className="text-4xl font-semibold tracking-tight mt-6 lg:mt-0 lg:text-5xl text-white sm:mb-6">
            About Me
          </h2>
          <p className="text-center lg:text-left text-base lg:text-lg max-w-md lg:max-w-xl text-white mb-4">
            Hello! I'm Aashutosh Gupta, a passionate Full Stack Developer with a knack for creating seamless, responsive, and visually appealing web applications. I thrive on the challenges and excitement that come with building comprehensive web solutions from the ground up.
          </p>
          <p className="text-center lg:text-left text-base lg:text-lg max-w-md lg:max-w-xl text-white mb-4">
            With a strong foundation in both front-end and back-end technologies, I enjoy working on every aspect of the development process. My goal is to deliver high-quality, user-friendly websites and applications that meet the needs of clients and users alike.
          </p>
          <p className="text-center lg:text-left text-base lg:text-lg max-w-md lg:max-w-xl text-white">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
