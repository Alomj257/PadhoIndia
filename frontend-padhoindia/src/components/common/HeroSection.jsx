import React from "react";
import { BookOutlined, TrophyOutlined } from "@ant-design/icons";
import heroBg from "../../assets/hero-bg.jpg";
const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left">
        {/* Tagline */}
        <p className="text-sm uppercase tracking-wide mb-4 text-gray-300">
          Unlock Limitless Opportunities with a Full Scholarship
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Your Future Starts <br />
          <span className="text-red-500">Here & Now</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
          Join a world-class education program with our 100% merit-based scholarships. Take the test, prove your skills, and unlock your potential today!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/apply-scholarship"
            className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Apply Now
          </a>
          <a
            href="/register"
            className="border-2 border-white px-6 md:px-8 py-3 rounded-lg text-lg font-semibold transition hover:bg-white hover:text-black shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Scholarship Benefits */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <BookOutlined className="text-3xl text-red-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">Scholarship Test</h3>
              <p className="text-gray-300 mt-1">
                Take the test and earn a fully-funded education.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <TrophyOutlined className="text-3xl text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold text-white">Merit-Based Rewards</h3>
              <p className="text-gray-300 mt-1">
                Achieve excellence and receive top-tier scholarships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
