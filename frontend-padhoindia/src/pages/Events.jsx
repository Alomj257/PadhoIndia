import React, { useState, useEffect } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const eventDate = new Date("2025-06-01T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <div className="w-full max-w-4xl p-6">
        {/* Title */}
        <Title level={1} className="text-4xl font-bold text-gray-800 text-center">
          Coming Soon
        </Title>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { label: "Days", value: timeLeft.days, gradient: "from-blue-500 to-purple-500" },
              { label: "Hours", value: timeLeft.hours, gradient: "from-green-500 to-blue-500" },
              { label: "Minutes", value: timeLeft.minutes, gradient: "from-yellow-500 to-orange-500" },
              { label: "Seconds", value: timeLeft.seconds, gradient: "from-pink-500 to-red-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center h-36 w-full bg-gradient-to-r ${item.gradient} rounded-lg text-white`}
              >
                <p className="text-5xl font-bold">{item.value}</p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
