import React from "react";

export const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg overflow-hidden max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
};
