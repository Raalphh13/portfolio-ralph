import React, { useState } from "react";
import { Modal } from "./Modal"; // Assuming you have a Modal component
import { CloudDownloadIcon } from "@heroicons/react/solid"; // You can use any icon or design

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16 mb-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-gray-800 to-gray-600 opacity-50 animate-gradient-x"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="mb-12">
          <img
            src="/dp2.png" // Replace with your image URL
            alt="Ralph Mendoza"
            className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-100">Come see my Resume!</h2>
          {/* Update text color to gray-200 for better visibility */}
          <p className="text-gray-300 mt-2 mb-6">
            Click the button below to view or download my resume.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            <CloudDownloadIcon className="w-5 h-5 mr-2" />
            Resume
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg">
            <img
              src="/resume.jpg" 
              alt="Resume"
              className="w-full max-w-4xl rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 bg-white p-2 rounded-full hover:text-black"
            >
              X
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}

