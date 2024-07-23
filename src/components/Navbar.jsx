import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrResume } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mx-10 sm:mx-">
          Ag
        </h1>
      </div>
      <div className="m-8 flex items-center justify-between sm:ml-4 gap-4 lg:gap-6">
        <a href="https://docs.google.com/document/d/1uaAAfMi54KX1FhHEQaMclwUvVPu1OJ3drLDi4Q_T3FI" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="Resume">
          <GrResume />
        </a>
        <a href="https://www.linkedin.com/in/aashutosh-gupta-9a089622b/" target="_blank" rel="noopener noreferrer" className="text-blue-700" aria-label="LinkedIn">
          <GrLinkedin />
        </a>
        <a href="https://github.com/ashu-1403" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="GitHub">
          <SiGithub />
        </a>
        <a href="https://www.instagram.com/ashushares/" target="_blank" rel="noopener noreferrer" className="text-pink-400" aria-label="Instagram">
          <FaSquareInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
