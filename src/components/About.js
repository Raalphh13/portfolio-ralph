import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Image Section */}
        <div className="mb-8">
          <img
            className="object-cover object-center rounded-full shadow-lg w-48 h-48"
            alt="aspiring IT professional"
            src="/profile.png" alt="My Profile" 
            />
    
        </div>

        {/* Text Content Section */}
        <div className="max-w-2xl">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-800">
            Hello, I am an aspiring
            
            <br></br> 
            <span className="p-10 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
              IT professional.
            </span>
          </h1>
          <p className="mb-12 mt-12 leading-relaxed text-gray-600">
            My name is <span className="font-medium text-gray-800">Ralph Mendoza</span>, 
            a 22-year-old Information Technology student at <span className="font-medium text-gray-800">Centro Escolar University</span>. 
            I am passionate about learning and exploring the limitless possibilities of technology. With a strong interest in software development, 
            web design, and IT solutions, I strive to create innovative and efficient systems that make a difference.
          </p>

          
          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-full text-lg"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black bg-white border-2 border-black py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded-full text-lg"
            >
              View My Work
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
