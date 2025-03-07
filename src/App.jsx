import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import TestSection from "./components/TestSection";
import Contact from "./components/Contact";

const App = () => {
  
  return (
    <div className="gradient-bg">
      <Header />
      <Hero />
      <About />
      <TestSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
