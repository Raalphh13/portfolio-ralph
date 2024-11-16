import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false); 
      }, 1000); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`loader-container ${isFading ? "fade-out" : ""}`}>
          <Loader />
        </div>
      ) : (
        <main className="text-body-font bg-gray-50">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
      )}
    </>
  );
}
