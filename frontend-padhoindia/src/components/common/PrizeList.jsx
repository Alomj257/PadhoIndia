import React from "react";

// Import images
import schoolImage from "../../assets/g1.jpg";
import cityImage from "../../assets/g1.jpg";
import blockImage from "../../assets/g1.jpg";
import districtImage from "../../assets/g1.jpg";
import stateImage from "../../assets/g1.jpg";
import firstPrizeImage from "../../assets/g1.jpg";
import secondPrizeImage from "../../assets/g1.jpg";
import thirdPrizeImage from "../../assets/g1.jpg";

const prizeData = [
  { title: "School and College Level", image: schoolImage, prize: "Diamond Card Facility", facilities: ["Free IT Training", "Legal Support", "Career Counselling", "Higher Study Chances", "Personality Buildup Classes"] },
  { title: "Panchayet/City Level", image: cityImage, prize: "Rs. 10,000 Scholarship + Rado Watch", facilities: ["11 Pcs. A1 CR Rado Watch"] },
  { title: "Block Level", image: blockImage, prize: "BMW, KTM & Pulsar Bikes", facilities: ["Laptops", "Scooty", "Android Phones"] },
  { title: "District Level", image: districtImage, prize: "Hyundai Exter + Rs. 10 Lakh Cash", facilities: ["Gold Chains", "Finalists advance to State Level"] },
  { title: "State Level", image: stateImage, prize: "Luxury Cars + Flats", facilities: ["2 Crore Cash", "3 BHK Flats", "Mercedes Benz"] },
  { title: "1st Prize", image: firstPrizeImage, prize: "Jaguar + 10 Cr Cash", facilities: ["1 Kg Gold Trophy", "Foreign Tour (10 days)"] },
  { title: "2nd Prize", image: secondPrizeImage, prize: "Jaguar + 8 Cr Cash", facilities: ["500 gm Gold Trophy", "Foreign Tour (10 days)"] },
  { title: "3rd Prize", image: thirdPrizeImage, prize: "Jaguar + 6 Cr Cash", facilities: ["250 gm Gold Trophy", "Foreign Tour (10 days)"] }
];

const PrizeList = () => {
  return (
    <div className="min-h-screen p-8 md:p-12 lg:p-16" style={{ backgroundColor: "transparent" }}>
      
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800 leading-snug tracking-tight">
        JAY BANGLA SCHOLARSHIP SWARNA CUP
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {prizeData.map((item, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden">
            
            {/* Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Always Visible Level Label */}
            <div className="absolute top-0 left-0 w-full p-4 bg-black/80 text-white text-sm md:text-base font-bold uppercase tracking-wide">
              {item.title}
            </div>

            {/* Hover Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full transition-all duration-500 bg-black/85 text-white p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100">
              
              <h3 className="text-md md:text-lg font-semibold text-yellow-400">
                {item.prize}
              </h3>

              <ul className="text-sm md:text-base leading-snug text-gray-300 mt-2">
                {item.facilities.map((facility, i) => (
                  <li key={i} className="mb-1">{facility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeList;
