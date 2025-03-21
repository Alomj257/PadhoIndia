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
    exam: ["General Knowledge", "Mathematics", "Science"],
    description: `The STEM Excellence Scholarship is aimed at supporting students 
    excelling in science, technology, engineering, and mathematics. It provides financial 
    assistance to cover tuition fees, living expenses, and includes mentorship programs 
    with industry experts. This scholarship is perfect for students pursuing careers 
    in scientific research, technology, and engineering.`,
    documents: ["Transcripts", "Resume", "Recommendation Letter"],
    process: "Apply online through the official website and submit the required documents.",
    terms: "Recipients must maintain a GPA of 3.0 or higher.",
    contact: "support@scholarships.com",
  },
  {
    id: 2,
    title: "Future Leaders Grant",
    amount: "$3,000",
    eligibility: "Class 8, 9, 10",
    deadline: "May 10, 2025",
    exam: ["English", "Reasoning", "Current Affairs"],
    description: `The Future Leaders Grant aims to identify and support students with 
    outstanding leadership potential. It offers financial aid and access to leadership 
    workshops, mentorship, and networking opportunities with industry leaders. 
    This grant empowers young students to develop their leadership skills and make 
    a positive impact in their communities.`,
    documents: ["Resume", "Leadership Essay"],
    process: "Submit your application with supporting documents online.",
    terms: "Only students with verified leadership activities are eligible.",
    contact: "leaders@scholarships.com",
  },
];

const ScholarshipList = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {scholarships.map((scholarship) => (
        <Card
          key={scholarship.id}
          className="mb-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          bodyStyle={{ display: "flex", flexDirection: "column" }}
        >
          <div className="md:flex md:items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{scholarship.title}</h2>
              <p className="text-gray-600">{scholarship.description.slice(0, 200)}...</p>

              <div className="flex items-center gap-4 my-4 flex-wrap">
                <Tag color="blue">{scholarship.amount}</Tag>
                <Tag color="green">{scholarship.eligibility}</Tag>
                <Tag color="red">Deadline: {scholarship.deadline}</Tag>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {scholarship.exam.map((subject, index) => (
                  <Tag color="purple" key={index}>
                    {subject}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 md:mt-0">
              <Button
                type="primary"
                onClick={() => navigate(`/scholarship/${scholarship.id}`)}
              >
                View Details
              </Button>
              <Button type="default">Apply Now</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ScholarshipList;
