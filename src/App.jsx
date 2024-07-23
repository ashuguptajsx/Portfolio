import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      <div className="absolute top-0 z-[-3] h-full w-full bg-black" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '14px 24px'
        }}>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black z-20" style={{
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)',
          maskImage: 'radial-gradient(ellipse at center, transparent 1%, black)'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Main />
          {/* <About /> */}
        </main>
      </div>
    </div>
  );
};

export default App;
