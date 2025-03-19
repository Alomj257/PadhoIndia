import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero1.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-[90vh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
        
        <div className="text-center px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          
          {/* Modern Heading with smaller text on mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Unlock <span className="text-yellow-400">Free Education</span> <br />
            Through <span className="text-blue-400">Scholarships</span>
          </h1>

          {/* Elegant Description */}
          <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-8 leading-relaxed">
            Personalized tests for{" "}
            <span className="text-yellow-300 font-medium">Class 1 to 12</span>.  
            Achieve your academic dreams with a scholarship-backed learning platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/scholarship" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-yellow-400 text-black text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
                Explore Tests
              </button>
            </Link>

            <Link to="/login" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-500 text-white text-sm md:text-base px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300">
                Login to Dashboard
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
