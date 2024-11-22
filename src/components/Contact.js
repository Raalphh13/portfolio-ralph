import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-16 mb-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-gray-800 to-gray-600 opacity-50 animate-gradient-x"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Left Section: Google Map */}
        <div className="lg:w-1/2 md:w-1/2 bg-white overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="w-full h-80"
            frameBorder={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6496819636945!2d121.09397581107407!3d14.56201477796063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c76c1fd82b63%3A0xf8b8feb158ee0a22!2sGreenwoods%20Executive%20Village%20Pasig%20Gate!5e0!3m2!1sen!2sph!4v1731745264248!5m2!1sen!2sph"
          />
        </div>

        {/* Right Section: Contact Details */}
        <div className="lg:w-1/2 md:w-1/2 mt-8 md:mt-0 bg-white p-8 shadow-lg">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out to me through the contact details below:
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:mendoza2105961@ceu.edu.ph"
              className="text-indigo-600 hover:text-indigo-700"
            >
              mendoza2105961@ceu.edu.ph
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">09158127957</p>
          </div>
        </div>
      </div>
    </section>
  );
}

