import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <div className="flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", stiffness: 200, damping: 20 }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl lg:text-4xl ml-16 lg:ml-52 font-Inter mr-2 sm:ml-2 mt-10 lg:mt-0" // Margin-top for smaller screens only
        >
          Contact Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", stiffness: 200, damping: 20 }}
          className="flex-grow border-t-4 border-pink-300 mr-14 mt-12 lg:mr-64 lg:mt-3"
        ></motion.div>
      </div>

      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="max-w-md w-full bg-slate-900 text-white shadow-lg rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Form</h2>
          <form action="https://formsubmit.co/ashugupta1403@gmail.com" method="POST" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                className="mt-1 block w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="mt-1 block w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
