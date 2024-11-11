import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Code, Sparkles } from 'lucide-react';

const ModernHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Animated background gradients */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-0 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Text content */}
          <div 
            className={`space-y-8 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 space-x-2 bg-gray-900 border border-gray-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Available for work</span>
            </div>
            
            {/* Headings */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none">
                Hey, I'm
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Aashutosh Gupta
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-400">
                Full Stack Developer
              </p>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Crafting exceptional digital experiences through clean code and 
              innovative solutions. Let's build something extraordinary together.
            </p>
          </div>

          {/* Interactive Elements */}
          <div 
            className={`w-full max-w-2xl transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Tech Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="group p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors">
                <Code className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
                <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
              </div>
              <div className="group p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors">
                <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Backend Development</h3>
                <p className="text-gray-400">Node.js, MongoDb, Express.JS</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ashugupta1403@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium transition-all hover:gap-4"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHero;