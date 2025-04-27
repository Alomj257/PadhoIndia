import React from 'react';
import { Link } from 'react-router-dom';

const ScholarshipCupFlow = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
        Scholarship Cup
      </h2>

      {/* Blinking Registration Button */}
      <Link
        to="/register"
        className="mt-4 mb-8 inline-block text-black text-sm sm:text-base font-semibold px-6 py-3 shadow-lg transition duration-300 animate-blinkYellow"
      >
        Registration Now Open
      </Link>

      {/* Flow structure */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Vertical line down from the button */}
        <div className="w-0.5 h-10 bg-gray-400" />

        {/* Horizontal split */}
        <div className="w-full flex justify-between items-start relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0" />

          {/* Left Option */}
          <div className="flex flex-col items-center w-1/2 px-2 sm:px-4 z-10">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <p className="text-base sm:text-lg font-semibold text-blue-800">₹2200</p>
              <p className="font-bold text-gray-800">Direct Gold Card</p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-blue-500 p-3 rounded text-sm sm:text-base w-full text-center">
              Direct Entry <br /> School & College Level
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Will Get Gold Card
            </div>
          </div>

          {/* Right Option */}
          <div className="flex flex-col items-center w-1/2 px-2 sm:px-4 z-10">
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <p className="text-base sm:text-lg font-semibold text-green-800">₹200</p>
              <p className="font-bold text-gray-800">For Qualifying</p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-white border border-green-500 p-3 rounded text-sm sm:text-base w-full text-center">
              First Qualify out of 4 <br /> Then Entry to School & College Level
            </div>

            <div className="w-0.5 h-10 bg-gray-400 my-1" />

            <div className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded shadow">
              Will Get Gold Card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCupFlow;
