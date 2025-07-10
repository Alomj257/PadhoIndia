import React, { useEffect, useState } from "react";
import { getAllLevels, getAllExams } from "../../services/api";

const AdminDashboard = () => {
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    fetchCandidates();
    fetchLevels();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await getAllExams();
      setTotalCandidates(res.data.registrations?.length || 0);
    } catch (err) {
      console.error("Error fetching candidates", err);
    }
  };

  const fetchLevels = async () => {
    try {
      const res = await getAllLevels();
      setLevels(res.data.data || []);
    } catch (err) {
      console.error("Error fetching levels", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Admin Dashboard
      </h1>

      <div className="bg-white rounded-xl shadow p-6 mb-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Total Registered Candidates
        </h2>
        <p className="text-4xl text-green-600 font-bold">
          {totalCandidates.toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => {
          const roomCapacity = level.name === "qualify" ? 46
            : level.name === "school" || level.name === "block" ? 92
            : level.name === "district" ? 341
            : 30;

          const roomCount = Math.ceil((level.totalCandidates || 0) / roomCapacity);

          return (
            <div
              key={level.name}
              className="bg-white p-5 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-blue-700 capitalize mb-4 text-center">
                {level.name} Level
              </h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>
                  👥 <strong>Total Candidates:</strong>{" "}
                  {level.totalCandidates?.toLocaleString() || 0}
                </li>
                <li>
                  🏫 <strong>Room Capacity:</strong> {roomCapacity}
                </li>
                <li>
                  🏢 <strong>Total Rooms:</strong> {roomCount}
                </li>
                <li>
                  🏆 <strong>Winners:</strong>{" "}
                  {level.winners?.length?.toLocaleString() || 0}
                </li>
                <li>
                  🌐 <strong>Online Mode:</strong>{" "}
                  {level.isOnline ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
