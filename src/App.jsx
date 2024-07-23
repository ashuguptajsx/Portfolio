import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";
import backgroundImage from "./assets/background3.jpg"; // Adjust path as needed

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)" // Adjust blur effect as needed
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="pt-20"> {/* Ensure proper padding for content */}
          <Main />
        </main>
      </div>
    </div>
  );
};

export default App;
