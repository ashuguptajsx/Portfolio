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
      <div className="m-8 flex items-center justify-between sm:ml-4 gap-4  lg:gap-6">
        <GrResume className="text-white" aria-label="Resume" />
        <GrLinkedin className="text-white" aria-label="LinkedIn" />
        <SiGithub className="text-white" aria-label="GitHub" />
        <FaSquareInstagram className="text-white" aria-label="Instagram" />
      </div>
    </nav>
  );
};

export default Navbar;
