import React from 'react';

const FacilitiesText = () => {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Discover Our Facilities
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
          Experience unparalleled educational support with expert mentorship, exclusive scholarships, and personalized coaching designed for your success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
        {/* Gold Card Facilities */}
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Gold Card Facilities
          </h3>
          <hr className="border-t-2 border-white mb-4"/>
          <ul className="text-white text-sm space-y-2 text-left">
            <li>1) Free Online Virtual And AI English Speaking Classes.</li>
            <li>2) Free Job Vacancy (Own Companies Projects And Other Companies)</li>
            <li>3) Free Acting Chances - Auditions for Serials, Ads, Videos, Content Creation on Various Platforms</li>
            <li>4) Chance to Become Crorepati (Through Company Franchise Opportunities)</li>
          </ul>
        </div>

        {/* Diamond Card Facilities */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Diamond Card Facilities
          </h3>
          <hr className="border-t-2 border-white mb-4"/>
          <ul className="text-white text-sm space-y-2 text-left">
            <li>1) Free Online IT All Course Classes</li>
            <li>2) Free Legal (Advocate) Support - High Court Only</li>
            <li>3) Higher Study Scholarship (All Diploma & Engineering Courses for Poor & Brilliant Students)</li>
            <li>4) Free Career Counseling Classes</li>
            <li>5) Motivational and Inspiring Classes</li>
          </ul>
        </div>

        {/* Membership Card Facilities */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Membership Card Facilities
          </h3>
          <hr className="border-t-2 border-white mb-4"/>
          <ul className="text-white text-sm space-y-2 text-left">
            <li>1) Free Online Tuition Classes (5th to 12th) - Two Times a Day (State-Wise Languages)</li>
            <li>2) Free Online Virtual Medical Treatment and Consulting (For Full Family Members)</li>
            <li>3) Chance to Participate in Scholarship Cup Competition</li>
          </ul>
        </div>
      </div>

      {/* School Scholarship Development (Larger width) */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-lg shadow-lg text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">
          School Scholarship Development
        </h3>
        <hr className="border-t-2 border-white mb-4"/>
        <ul className="text-white text-sm space-y-2 text-left">
          <li>1) Scholarships for Underprivileged and Brilliant Students</li>
          <li>2) Academic Excellence Rewards for High Performers</li>
          <li>3) Special Focus on Diploma and Engineering Courses</li>
          <li>4) Empowering the Future Generation through Educational Opportunities</li>
        </ul>
      </div>

      {/* Gradient Button below School Scholarship Development */}
      <div className="flex justify-center mt-8">
        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-700 transition duration-300">
          View 46 Top School List (State Wise)
        </button>
      </div>
    </div>
  );
};

export default FacilitiesText;
