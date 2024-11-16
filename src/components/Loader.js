import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        {/* Circular Image */}
        <div className="mb-6">
          <img
            src="/profile.png" // Replace with the path to your small image
            alt="Loading"
            className="w-16 h-16 mx-auto rounded-full"
          />
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-teal-500 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
