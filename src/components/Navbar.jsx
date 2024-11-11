import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin,
  FileText,
  Instagram,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      icon: <FileText className="w-5 h-5" />,
      label: 'Resume',
      href: 'https://docs.google.com/document/d/1uaAAfMi54KX1FhHEQaMclwUvVPu1OJ3drLDi4Q_T3FI',
      color: 'hover:text-blue-400'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aashutosh-gupta-9a089622b/',
      color: 'hover:text-blue-500'
    },
    { 
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/ashu-1403',
      color: 'hover:text-purple-400'
    },
    { 
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/ashushares/',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="group flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900 rounded-lg px-3 py-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Ag
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group p-2 ${link.color} transition-colors duration-200`}
              >
                <span className="absolute inset-0 rounded-lg bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center space-x-2">
                  {link.icon}
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {link.label}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col pt-20 px-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center space-x-3 p-3 rounded-lg
                  bg-gray-800/50 ${link.color} transition-colors duration-200
                `}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;