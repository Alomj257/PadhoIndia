import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { verifyApplication } from "../services/api";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote the national anthem of India?",
    options: ["Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi", "Bankim Chandra"],
    answer: "Rabindranath Tagore",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2", "H2O", "HO2"],
    answer: "H2O",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Indian", "Arctic", "Pacific", "Atlantic"],
    answer: "Pacific",
  },
];

const Exam = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [applicationNumber, setApplicationNumber] = useState("");
  const [dob, setDob] = useState("");
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [optionDisabled, setOptionDisabled] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!examStarted) return;

    setTimeLeft(30);
    setOptionDisabled(false);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestion, examStarted]);

  const handleTimeout = () => {
    setOptionDisabled(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setExamStarted(false);
        setShowThankYou(true);
      }
    }, 1000);
  };

  const handleStart = async () => {
    // Validate DOB format: DD-MM-YYYY
    const dobRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!dobRegex.test(dob)) {
      alert("Please enter Date of Birth in DD-MM-YYYY format");
      return;
    }

    const [, dd, mm, yyyy] = dob.match(dobRegex);
    // Optionally, add more validations on day/month ranges here

    // Convert to ISO format YYYY-MM-DD
    const formattedDob = `${yyyy}-${mm}-${dd}`;

    try {
      const res = await verifyApplication({
        applicationNumber,
        dob: formattedDob,
      });

      if (res.data.success) {
        setShowLogin(false);
        setExamStarted(true);
        setCurrentQuestion(0);
        setAnswers([]);
      } else {
        alert(res.data.message || "Invalid credentials");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server error");
    }
  };

  const handleOptionSelect = (selectedOption) => {
    if (optionDisabled) return;

    setOptionDisabled(true);
    setAnswers((prev) => [...prev, selectedOption]);

    if (timerRef.current) clearInterval(timerRef.current);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setExamStarted(false);
        setShowThankYou(true);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      {/* Login Modal */}
      <Dialog open={showLogin} onClose={() => { }} className="relative z-50">
        <div className="fixed inset-0 bg-black/20" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <Dialog.Title className="text-lg font-semibold text-center mb-5">
              Enter Exam Credentials
            </Dialog.Title>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Application Number"
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                required
              />
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                value={dob}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^\d]/g, "");

                  if (value.length > 2 && value.length <= 4) {
                    value = value.slice(0, 2) + "-" + value.slice(2);
                  } else if (value.length > 4) {
                    value = value.slice(0, 2) + "-" + value.slice(2, 4) + "-" + value.slice(4, 8);
                  }

                  setDob(value);
                }}
                maxLength={10}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                required
              />

              <button
                onClick={handleStart}
                className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 rounded-md transition"
              >
                Start Exam
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Exam Question */}
      {examStarted && (
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <div className="text-sm font-medium text-indigo-600 select-none">
              Time Left: {timeLeft}s
            </div>
          </div>
          <p className="mb-6 text-gray-900 text-xl font-medium">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => {
              const isSelected = answers[currentQuestion] === option;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  disabled={optionDisabled}
                  className={`w-full text-left px-4 py-2 rounded-md border
                    ${isSelected
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-800 hover:bg-indigo-50"
                    }
                    ${optionDisabled && !isSelected ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onClose={() => { }} className="relative z-50">
        <div className="fixed inset-0 bg-black/20" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-md shadow-md text-center w-full max-w-sm">
            <Dialog.Title className="text-xl font-semibold text-green-600 mb-4">
              🎉 Thank You!
            </Dialog.Title>
            <p className="mb-6 text-gray-700">
              Your responses have been submitted successfully.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Go to Dashboard
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Exam;
