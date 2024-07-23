import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      <div className="absolute top-0 z-[-3] h-screen w-screen">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-2] h-full w-full bg-neutral-950"
        style={{
          background: `radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))`,
          backgroundSize: "20px 20px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          // filter: "blur(3px)"
        }}
      >
        
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
