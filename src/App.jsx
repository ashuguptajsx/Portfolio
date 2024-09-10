import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden overflow-y-auto">
      <div className="absolute inset-0 z-[-1] h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Main />
          <About />
          <Technology />
          <Projects />
          <Contact />
        </main>
        <Analytics />
      </div>
    </div>
  );
};

export default App;
