export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white body-font"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-700 to-black opacity-50 animate-gradient-x"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center py-16">
        {/* Profile Picture */}
        <div className="mb-8">
          <img
            className="object-cover object-center rounded-full shadow-lg w-48 h-48"
            alt="aspiring IT professional"
            src="/profile.png" // Replace with your profile picture path
          />
        </div>

        {/* Text Content Section */}
        <div className="max-w-2xl">
          <h1 className="sm:text-5xl text-4xl mb-4 font-bold text-gray-200">
            Hello, I am an aspiring
            <br />
            <span className="p-10 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
              IT professional.
            </span>
          </h1>
          <p className="mb-12 mt-12 leading-relaxed text-gray-300">
            My name is <span className="font-medium text-white">Ralph Mendoza</span>,
            a 22-year-old Information Technology student at <span className="font-medium text-white">Centro Escolar University</span>.
            I am passionate about learning and exploring the limitless possibilities of technology. With a strong interest in software development,
            web design, and IT solutions, I strive to create innovative and efficient systems that make a difference.
          </p>

          {/* Buttons */}
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

        {/* Images Below Text */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {/* First Image */}
          <img
            className="object-cover object-center rounded-lg shadow-md w-56 h-56"
            alt="Additional Visual 1"
            src="Mendoza.jpg" // Replace with your image file path
          />

          {/* Second Image */}
          <img
            className="object-cover object-center rounded-lg shadow-md w-56 h-56"
            alt="Additional Visual 2"
            src="2nd.jpg" // Replace with your second image file path
          />

          {/* Third Image */}
          <img
            className="object-cover object-center rounded-lg shadow-md w-56 h-56"
            alt="Additional Visual 3"
            src="3rd.jpg" // Replace with your third image file path
          />
        </div>
      </div>
    </section>
  );
}





