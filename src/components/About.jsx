import React from "react";
import image from "../assets/developer.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <div className="flex items-center">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-10 text-xl lg:text-4xl ml-16 lg:ml-52 font-In-ter">
          About Me
        </h1>
       
        <div className="flex-grow border-t-4 border-white mr-14 lg:mr-72"></div>
     
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <img
          className="" 
          src="{image}" alt="" />
        </div>
        <p className="text-white"></p>
      </div>
    </div>
  );
};

export default About;
