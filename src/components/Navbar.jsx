import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrLinkedin, GrResume } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } },
  };

  const linkItems = [
    { Icon: GrResume, href: "https://docs.google.com/document/d/1uaAAfMi54KX1FhHEQaMclwUvVPu1OJ3drLDi4Q_T3FI", label: "Resume", color: "blue-400" },
    { Icon: GrLinkedin, href: "https://www.linkedin.com/in/aashutosh-gupta-9a089622b/", label: "LinkedIn", color: "blue-500" },
    { Icon: SiGithub, href: "https://github.com/ashu-1403", label: "GitHub", color: "purple-400" },
    { Icon: FaSquareInstagram, href: "https://www.instagram.com/ashushares/", label: "Instagram", color: "pink-400" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Ag
          </h1>
        </motion.div>

        <div className="hidden md:flex items-center space-x-4">
          {linkItems.map(({ Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${color} p-2 rounded-full border border-${color} hover:bg-${color} hover:text-white transition-colors duration-300`}
              aria-label={label}
              whileHover="hover"
              variants={iconVariants}
              custom={index}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.97 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg p-4 z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col space-y-4 mt-16">
              {linkItems.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 text-${color} p-2 rounded-md hover:bg-${color} hover:text-white transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLinkClick}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;