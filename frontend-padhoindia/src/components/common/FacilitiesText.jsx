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
        <p className="text-white text-sm">
          Exclusive gold card privileges that provide exceptional benefits for members.
        </p>
      </div>

      {/* Diamond Card Facilities */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Diamond Card Facilities
        </h3>
        <p className="text-white text-sm">
          Premium diamond card facilities with access to elite services and resources.
        </p>
      </div>

      {/* School Scholarship Development */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          School Scholarship Development
        </h3>
        <p className="text-white text-sm">
          Scholarships aimed at empowering students and encouraging academic excellence.
        </p>
      </div>
    </div>
    </div>
  );
}

export default FacilitiesText;
