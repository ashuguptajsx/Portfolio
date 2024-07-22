import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      {/* Radial Gradient Background with Blur */}
      <div
        className="absolute top-0 z-[-10] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
        style={{
          filter: "blur(19px)", // Adjust blur effect as needed
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="pt-20"> {/* Ensure proper padding for content */}
          <Main />
          {/* <About /> */}
        </main>
      </div>
    </div>
  );
};

export default App;
