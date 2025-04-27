import React from 'react';

const FacilitiesText = () => {
  return (
    <div className="pt-16 bg-gray-50">
         {/* videosection
         <div class="bg-gray-100 py-16 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <!-- Section Title -->
    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Our Introduction Video
    </h2>
    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
      Learn what we do and how we help students grow.
    </p>

    <!-- Video Container with YouTube Embed and Fixed Height -->
    <div class="rounded-lg overflow-hidden shadow-lg border border-gray-300 h-[400px] md:h-[600px]">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/5ILM8u1wHVs?autoplay=1&mute=1&controls=1&loop=1&playlist=5ILM8u1wHVs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full h-full"
      ></iframe>
    </div>
  </div>
</div>


      videosection */}


      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Discover Our Facilities
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
          Experience unparalleled educational support with expert mentorship, exclusive scholarships, and personalized coaching designed for your success.
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-6 py-12">
  {/* Gold Card Facilities */}
  <div className="w-full md:w-[400px] bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-center">
    <h3 className="text-2xl font-bold text-white mb-4">
      Gold Card Facilities
    </h3>
    <hr className="border-t-2 border-white mb-4" />
    <ul className="text-white text-sm space-y-2 text-left">
      <li>1) Free Online IT All Course Classes</li>
      <li>2) Free Legal (Advocate) Support - High Court Only</li>
      <li>3) Higher Study Scholarship (All Diploma & Engineering Courses for Poor & Brilliant Students)</li>
      <li>4) Free Career Counseling Classes</li>
      <li>5) Motivational and Inspiring Classes</li>
      <li>6) Free Job Vacancy (Own Companies Projects And Other Companies)</li>
      <li>7) Free Acting Chances - Auditions for Serials, Ads, Videos, Content Creation on Various Platforms</li>
      <li>8) Chance to Become Crorepati (Through Company Franchise Opportunities)</li>
    </ul>
  </div>

  {/* Membership Card Facilities */}
  <div className="w-full md:w-[400px] bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-lg shadow-lg text-center">
    <h3 className="text-2xl font-bold text-white mb-4">
      Membership Card Facilities
    </h3>
    <hr className="border-t-2 border-white mb-4" />
    <ul className="text-white text-sm space-y-2 text-left">
      <li>1) Free Online Tuition Classes (5th to 12th) - Two Times a Day (State-Wise Languages)</li>
      <li>2) Free Online Virtual Medical Treatment and Consulting (For Full Family Members)</li>
      <li>3) Chance to Participate in Scholarship Cup Competition</li>
      <li>4) Free Online Virtual And AI English Speaking Classes.</li>
      <li>5) Free Online Computer Training Classes.</li>
      <li>6) Free Online Martial Art Classes.</li>
      <li>7) Chance to referral income of various projects</li>
      <li>8) Chance to Participate in Scholarship Cup Competition</li>
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
