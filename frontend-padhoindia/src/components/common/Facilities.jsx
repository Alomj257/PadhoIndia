import React from "react";
import { Row, Col, Card, ConfigProvider } from "antd";
import { FaGraduationCap, FaUserTie, FaMedal, FaChalkboardTeacher } from "react-icons/fa";
import "antd/dist/reset.css";

// Import images from the assets folder
import img1 from "../../assets/f1.jpg";
import img2 from "../../assets/f2.jpg";
import img3 from "../../assets/f3.jpg";
import img4 from "../../assets/f4.jpg";

const facilities = [
  {
    id: 1,
    title: "Free Quality Education",
    description: "Empowering underprivileged students with accessible, high-standard education guided by expert mentors.",
    icon: <FaGraduationCap />,
    img: img1,
    iconColor: "text-red-500"
  },
  {
    id: 2,
    title: "Elite Mentorship",
    description: "Learn from top-tier mentors with industry expertise and years of experience across diverse domains.",
    icon: <FaUserTie />,
    img: img2,
    iconColor: "text-green-500"
  },
  {
    id: 3,
    title: "Exclusive Scholarships",
    description: "Secure scholarships that recognize and support exceptional talent, fostering academic excellence.",
    icon: <FaMedal />,
    img: img3,
    iconColor: "text-yellow-500"
  },
  {
    id: 4,
    title: "1-on-1 Coaching",
    description: "Personalized coaching sessions tailored to accelerate individual growth and academic performance.",
    icon: <FaChalkboardTeacher />,
    img: img4,
    iconColor: "text-blue-500"
  }
];

const Facilities = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            bodyPadding: 0,  // Removes Ant Design body padding
          }
        }
      }}
    >
      <div className="py-16 bg-gray-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">Discover Our Facilities</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Experience unparalleled educational support with expert mentorship, exclusive scholarships, and personalized coaching designed for your success.
          </p>
        </div>

        {/* Facility Cards */}
        <Row gutter={[24, 24]} justify="center" className="px-6 md:px-10">
          {facilities.map((facility) => (
            <Col key={facility.id} xs={24} sm={12} md={12} lg={6}>
              <div className="relative">
                {/* Circular Icon */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                  <span className={`text-4xl ${facility.iconColor}`}>{facility.icon}</span>
                </div>

                {/* Card */}
                <Card
                  hoverable
                  className="rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-0 mt-12"
                  bodyStyle={{ padding: 0 }}  // Removes padding from the card
                >
                  {/* Image Background */}
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{ backgroundImage: `url(${facility.img})` }}
                  ></div>

                  {/* Text Content */}
                  <div className="text-center mt-6 p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
                    <p className="text-gray-600 mt-3 leading-relaxed">{facility.description}</p>
                  </div>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default Facilities;
