import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <div ref={ref} className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="bg-slate-800 shadow-2xl rounded-lg p-8 border border-gray-700"
        >
          <form action="https://formsubmit.co/ashugupta1403@gmail.com" method="POST" className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <motion.div
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <motion.div
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <motion.div
                className="relative"
                variants={inputVariants}
                whileFocus="focus"
              >
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                ></textarea>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-purple-700 transition duration-300"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;







