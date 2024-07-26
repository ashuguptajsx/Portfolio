import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="max-w-md w-full bg-slate-900 text-white shadow-lg rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
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
  );
};

export default Contact;
