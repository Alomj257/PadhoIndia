import React from "react";
import { Row, Col, Card } from "antd";
import { FaGraduationCap, FaUserTie, FaMedal, FaChalkboardTeacher } from "react-icons/fa";

const facilities = [
  {
    id: 1,
    title: "Free Education",
    description: "Providing free quality education to underprivileged students.",
    icon: <FaGraduationCap />,
    bgColor: "bg-red-100",
    iconBg: "bg-red-500",
    textColor: "text-red-500"
  },
  {
    id: 2,
    title: "Best Mentor",
    description: "Guidance from top mentors with years of experience.",
    icon: <FaUserTie />,
    bgColor: "bg-green-100",
    iconBg: "bg-green-500",
    textColor: "text-green-500"
  },
  {
    id: 3,
    title: "Best Scholarship",
    description: "Scholarships for deserving students.",
    icon: <FaMedal />,
    bgColor: "bg-yellow-100",
    iconBg: "bg-yellow-500",
    textColor: "text-yellow-500"
  },
  {
    id: 4,
    title: "1-to-1 Coaching",
    description: "Personalized coaching to enhance learning outcomes.",
    icon: <FaChalkboardTeacher />,
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-500",
    textColor: "text-blue-500"
  }
];

const Facilities = () => {
  return (
    <div className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Padho India Facilities</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Unlock the power of education with our exceptional facilities. Learn from the best and grow with personalized coaching.
        </p>
      </div>

      {/* Facility Cards */}
      <Row gutter={[30, 30]} justify="center" className="px-10">
        {facilities.map((facility) => (
          <Col key={facility.id} xs={24} sm={12} md={12} lg={6}>
            <div className="flex flex-col items-center">
              {/* Circular Icon Container */}
              <div
                className={`relative flex justify-center items-center w-32 h-32 rounded-full ${facility.bgColor}`}
              >
                <div
                  className={`absolute -top-8 w-20 h-20 rounded-full ${facility.iconBg} shadow-lg flex justify-center items-center`}
                >
                  <span className="text-4xl text-white">{facility.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <Card
                hoverable
                className={`rounded-full w-72 h-72 flex flex-col justify-center items-center text-center shadow-lg mt-10 ${facility.bgColor}`}
              >
                <h3 className={`text-2xl font-bold ${facility.textColor}`}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 mt-4">{facility.description}</p>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Facilities;
