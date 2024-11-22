import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white md:sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Brand Name */}
        <a href="#about" className="text-2xl font-bold text-white tracking-wide">
          Ralph Mendoza
        </a>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center space-x-6 mt-4 md:mt-0">
          <a
            href="#projects"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-indigo-600"
          >
            Projects & Certifications
          </a>
          <a
            href="#skills"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-indigo-600"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-teal-400 to-indigo-600"
          >
            Resume
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="ml-10 inline-flex items-center bg-gradient-to-r from-teal-400 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </header>
  );
}


