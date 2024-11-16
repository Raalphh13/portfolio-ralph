import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 text-gray-800 body-font">
      <div className="container px-5 py-16 mx-auto text-center lg:px-32">
        <div className="flex flex-col w-full mb-12">
          <AcademicCapIcon className="mx-auto inline-block w-12 h-12 text-blue-500 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Thesis and Certifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Here is a showcase of my academic thesis and certifications. Each represents my dedication, skills, and commitment to growth in the IT field.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.image}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                alt="gallery"
                className="w-full h-80 object-contain w-full h-48 object-cover"
                src={project.image}
              />
              <div className="p-6">
                <h2 className="text-sm font-medium text-blue-500 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="text-lg font-bold text-gray-900 mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed text-gray-700 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
