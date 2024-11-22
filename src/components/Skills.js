import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
<<<<<<< HEAD
    <section
      id="skills"
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-gray-800 to-gray-600 opacity-50 animate-gradient-x"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-5 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-12 h-12 inline-block text-teal-400 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-gray-300 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            With a passion for solving complex challenges, I have honed a diverse set of skills across various domains. These tools and technologies empower me to innovate, create, and deliver efficient, high-quality solutions for every project.
          </p>
=======
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 py-16">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-12 h-12 inline-block text-blue-500 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
            Skills
          </h1>
          <p className="text-gray-600 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          With a passion for solving complex challenges, I have honed a
            diverse set of skills across various domains. These tools and
            technologies empower me to innovate, create, and deliver efficient,
            high-quality solutions for every project.          </p>
>>>>>>> 519d283c4e67dce4c25f851ff3944d1828b29f2f
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-white shadow-lg rounded-lg flex p-6 items-center border border-gray-200 hover:shadow-xl transition-shadow">
                <BadgeCheckIcon className="text-green-500 w-8 h-8 flex-shrink-0 mr-4" />
                <span className="title-font font-semibold text-gray-800">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 519d283c4e67dce4c25f851ff3944d1828b29f2f
