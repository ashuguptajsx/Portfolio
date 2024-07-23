import React from "react";
import profileImage from "../assets/image.jpg";

const Main = () => {
  return (
    <div className="sm:mt-0">
      <div className="flex flex-col lg:flex-row items-start mx-10">
        {/* Text Content Container */}
        <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start lg:pr-10">
          <h1 className="text-4xl font-thin tracking-tight mt-6 mb-10 lg:text-6xl lg:ml-28 text-white sm:mt-0">
            Aashutosh&nbsp;Gupta
          </h1>
          <span className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 lg:text-3xl lg:ml-28">
            Full Stack Developer
          </span>
          <p className="text-center lg:text-left text-base lg:text-lg max-w-md lg:max-w-xl lg:ml-28 text-white mb-6 san-serif inter">
            Welcome to my <span className=" font-extrabold">portfolio!</span>
          </p>
          <button className="mt-6 lg:ml-28 py-2 px-4 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Hire Me
          </button>
        </div>

        {/* Image Container with Gradient Border */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:mr-28 mt-10 lg:mt-0">
          <div className="relative h-80 w-80 rounded-xl overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute inset-0 p-[6px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl">
              <div className="h-full w-full bg-neutral-900 rounded-xl">
                <img
                  src={profileImage} // Replace with the actual image path
                  alt="Profile"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
