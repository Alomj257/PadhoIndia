import React from "react";
import { Card, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const scholarships = [
  {
    id: 1,
    title: "STEM Excellence Scholarship",
    amount: "$5,000",
    eligibility: "Class 10, 11, 12",
    deadline: "April 15, 2025",
    exam: ["GK", "Maths", "Science"],
  },
  {
    id: 2,
    title: "Future Leaders Grant",
    amount: "$3,000",
    eligibility: "Class 8, 9, 10",
    deadline: "May 10, 2025",
    exam: ["GK", "English", "Reasoning"],
  },
];

const ScholarshipList = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scholarships.map((scholarship) => (
        <Card
          key={scholarship.id}
          title={`🎓 ${scholarship.title}`}
          className="shadow-lg rounded-lg hover:shadow-2xl transition"
          extra={<Tag color="blue">{scholarship.amount}</Tag>}
        >
          <p className="text-gray-700">
            <strong>Eligibility:</strong> {scholarship.eligibility}
          </p>
          <p className="text-gray-500">
            <strong>Deadline:</strong> {scholarship.deadline}
          </p>
          <div className="mt-4">
            {scholarship.exam.map((subject, index) => (
              <Tag color="green" key={index}>
                {subject}
              </Tag>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              type="primary"
              onClick={() => navigate(`/scholarship/${scholarship.id}`)}
            >
              View Details
            </Button>
            <Button type="default">Apply Now</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ScholarshipList;
