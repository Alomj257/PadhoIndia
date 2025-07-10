import React, { useEffect, useState } from "react";
import { getAllLevels, getAllExams } from "../../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  BarChart3,
  LayoutGrid,
  Trophy,
  Globe,
} from "lucide-react";

const LEVEL_ORDER = ["qualify", "school", "block", "district"];
const LEVEL_COLORS = {
  qualify: "#22c55e",
  school: "#3b82f6",
  block: "#f59e0b",
  district: "#ef4444",
};

const AdminDashboard = () => {
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [levels, setLevels] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchCandidates();
    fetchLevels();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await getAllExams();
      setRegistrations(res.data.registrations || []);
      setTotalCandidates(res.data.registrations?.length || 0);
    } catch (err) {
      console.error("Error fetching candidates", err);
    }
  };

  const fetchLevels = async () => {
    try {
      const res = await getAllLevels();
      const ordered = LEVEL_ORDER;
      const sorted = res.data.data?.sort(
        (a, b) => ordered.indexOf(a.name) - ordered.indexOf(b.name)
      );
      setLevels(sorted || []);
    } catch (err) {
      console.error("Error fetching levels", err);
    }
  };

  const getRoomCapacity = (levelName) => {
    switch (levelName) {
      case "qualify":
        return 46;
      case "school":
      case "block":
        return 92;
      case "district":
        return 341;
      default:
        return 30;
    }
  };

  return (
    <div className="p-6 min-h-screen space-y-10">
      {/* Total Candidates */}
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <Users size={40} className="text-blue-600 mx-auto mb-2" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Total Registered Candidates
        </h2>
        <p className="text-4xl font-bold text-green-700 mt-2">
          {totalCandidates.toLocaleString()}
        </p>
      </div>

      {/* Small Bar Charts per Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {levels.map((level) => {
          const roomCapacity = getRoomCapacity(level.name);
          const roomCount = Math.ceil((level.totalCandidates || 0) / roomCapacity);
          const chartData = [
            {
              name: level.name,
              Candidates: level.totalCandidates || 0,
              Rooms: roomCount,
            },
          ];

          return (
            <div
              key={level.name}
              className="bg-white p-5 rounded-xl shadow border border-gray-100"
            >
              <h3 className="text-lg font-bold capitalize text-center text-gray-800 mb-4">
                {level.name} Level Overview
              </h3>
              <ResponsiveContainer width="50%" height={120} className="ml-10">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Candidates" fill={LEVEL_COLORS[level.name]} />
                </BarChart>
              </ResponsiveContainer>

              <ul className="mt-4 text-[15px] text-gray-800 space-y-2">
                <li className="flex items-center">
                  <BarChart3 size={20} className="inline-block mr-2 text-blue-500" />
                  <span>
                    <strong>Total Candidates:</strong>{" "}
                    <span className="font-semibold">{level.totalCandidates?.toLocaleString() || 0}</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <LayoutGrid size={20} className="inline-block mr-2 text-purple-500" />
                  <span>
                    <strong>Room Capacity:</strong>{" "}
                    <span className="font-semibold">{roomCapacity}</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <Globe size={20} className="inline-block mr-2 text-yellow-500" />
                  <span>
                    <strong>Total Rooms:</strong>{" "}
                    <span className="font-semibold">{roomCount}</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <Trophy size={20} className="inline-block mr-2 text-green-500" />
                  <span>
                    <strong>Winners:</strong>{" "}
                    <span className="font-semibold">{level.winners?.length?.toLocaleString() || 0}</span>
                  </span>
                </li>
                <li className="flex items-center">
                  <Globe size={20} className="inline-block mr-2 text-gray-500" />
                  <span>
                    <strong>Online:</strong>{" "}
                    {level.isOnline ? (
                      <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                      <span className="text-red-600 font-semibold">No</span>
                    )}
                  </span>
                </li>
              </ul>

            </div>
          );
        })}
      </div>

      {/* Candidate List Preview */}
      <div className="bg-white rounded-xl shadow p-6 mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recently Registered Candidates
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm table-auto border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Mobile</th>
                <th className="p-2 border">Category</th>
              </tr>
            </thead>
            <tbody>
              {registrations.slice(0, 5).map((r, i) => (
                <tr key={r._id} className="border-b">
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">{r.candidateName}</td>
                  <td className="p-2 border">{r.emailId}</td>
                  <td className="p-2 border">{r.mobileNumber}</td>
                  <td className="p-2 border">{r.category}</td>
                </tr>
              ))}
              {registrations.length === 0 && (
                <tr>
                  <td className="p-2 text-center text-gray-500" colSpan="5">
                    No registrations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
