import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Tag } from "antd";

const scholarships = [
  {
    id: 1,
    title: "STEM Excellence Scholarship",
    amount: "$5,000",
    eligibility: "Class 10, 11, 12",
    deadline: "April 15, 2025",
    description: "This scholarship supports students excelling in STEM subjects.",
    exam: ["GK", "Maths", "Science"],
    documents: ["Transcripts", "Resume", "Recommendation Letter"],
    process: "Apply online and submit required documents.",
    terms: "Must maintain GPA of 3.0 or higher.",
    contact: "support@scholarships.com",
  },
  {
    id: 2,
    title: "Future Leaders Grant",
    amount: "$3,000",
    eligibility: "Class 8, 9, 10",
    deadline: "May 10, 2025",
    description: "Award for students demonstrating leadership skills.",
    exam: ["GK", "English", "Reasoning"],
    documents: ["Resume", "Essay"],
    process: "Apply through the official website.",
    terms: "Applicable only for leadership students.",
    contact: "leaders@scholarships.com",
  },
];

const ScholarshipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scholarship = scholarships.find((s) => s.id === parseInt(id));

  if (!scholarship) {
    return <div>Scholarship not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Card title={`🎓 ${scholarship.title}`} className="shadow-lg">
        <p><strong>Amount:</strong> {scholarship.amount}</p>
        <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
        <p><strong>Deadline:</strong> {scholarship.deadline}</p>
        <p><strong>Description:</strong> {scholarship.description}</p>

        <div className="my-4">
          <strong>Exam Subjects:</strong>
          {scholarship.exam.map((subject, index) => (
            <Tag color="green" key={index}>
              {subject}
            </Tag>
          ))}
        </div>

        <div className="my-4">
          <strong>Required Documents:</strong>
          {scholarship.documents.map((doc, index) => (
            <Tag color="blue" key={index}>
              {doc}
            </Tag>
          ))}
        </div>

        <p><strong>Application Process:</strong> {scholarship.process}</p>
        <p><strong>Terms:</strong> {scholarship.terms}</p>
        <p><strong>Contact:</strong> {scholarship.contact}</p>

        <div className="flex justify-between mt-4">
          <Button onClick={() => navigate("/")} type="primary">
            Back to List
          </Button>
          <Button type="default">Apply Now</Button>
        </div>
      </Card>
    </div>
  );
};

export default ScholarshipDetails;
