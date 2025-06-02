import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import LearningLab from "./sections/LearningLab";
import Experiences from "./sections/Experiences";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <LearningLab />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
