import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";
import cupImage from "../../assets/cup.png";
import prizePDF from "../../assets/prize-list.pdf"; // ✅ import PDF

const Hero = () => {
  return (
    <div
      className="relative h-[110vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="text-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-yellow-300 leading-relaxed mb-4">

            PADHO INDIA SCHOLARSHIP CUP
          </h1>

          {/* Updated Description */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-4 leading-relaxed font-medium">
            552 Candidates Will Become <span className="text-yellow-400 font-semibold">Crorepatis</span>.<br />
            Over 10 Lakh Students will get <span className="text-blue-400 font-semibold">Scholarship</span>...<br />
            And Millions of Students will make career by <span className="text-green-400 font-semibold">Higher study</span>.
          </p>

          {/* Cup Image and Text */}
          <div className="mb-6 flex flex-col items-center">
            <img
              src={cupImage}
              alt="Cup"
              className="w-[100px] h-auto object-contain mb-2"
            />
            <span className="text-white px-6 py-2 font-bold text-lg animate-blinkBg">
              Scholarship Cup
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href={prizePDF}
              download="prize-list.pdf"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkYellow hover:scale-105 transition-transform duration-300">
                Prize List for competition
              </button>
            </a>

            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg animate-blinkBlue hover:scale-105 transition-transform duration-300">
                Registration for Competition
              </button>
            </Link>
          </div>

          {/* Unlock Text */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight">
            Unlock <span className="text-yellow-400">Free Education</span> <br />
            Through <span className="text-blue-400">Scholarships</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
