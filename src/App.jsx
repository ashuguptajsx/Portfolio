import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import About from "./components/About";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0 z-[-10] h-full w-full bg-slate-950">
        {/* Existing Radial and Linear Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(#ffffff33 1px, #00091d 1px), linear-gradient(rgba(245, 0, 255, 0.2), rgba(245, 0, 255, 0.2))`,
            backgroundSize: "20px 20px, 100%",
            backgroundPosition: "center, center",
            backgroundRepeat: "repeat, no-repeat",
            filter: "blur(3px)"
          }}
        ></div>
        {/* Additional Fuchsia Overlay */}
       
        {/* New Radial Gradient Layer */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>

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
