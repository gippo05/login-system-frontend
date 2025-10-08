import { useEffect, useState } from "react";
import axios from "axios";

const ActivityTracker = ({ status }) => {
  const [activityLog, setActivityLog] = useState([]);

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem("token"); // 👈 from login
      const res = await axios.get("https://timewise-login-system-backend.onrender.com/api/activity/attendance", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActivityLog(res.data);
    } catch (error) {
      console.error("❌ Error fetching activities:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [status]); // 👈 re-fetch whenever status changes

  return (
    <div className="w-full max-w-3xl h-40 bg-[#f5f5f5] shadow-md rounded-2xl px-6 py-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Activity Tracker</h2>
      <ul className="space-y-4">
        {activityLog.length === 0 ? (
          <li className="text-gray-500">No activity yet</li>
        ) : (
          activityLog.map((entry, index) => (
            <li key={index} className="text-sm space-y-1 border-b pb-2">
              <p className="font-semibold text-blue-600">
                Shift Type: {entry.shiftType || "N/A"}
              </p>

              {entry.shiftStart && (
                <div>
                  <span className="font-medium">Shift Started</span> —{" "}
                  <span className="text-gray-500">
                    {new Date(entry.shiftStart).toLocaleString()}
                  </span>
                </div>
              )}

              {entry.lunchStart && (
                <div>
                  <span className="font-medium">Lunch Started</span> —{" "}
                  <span className="text-gray-500">
                    {new Date(entry.lunchStart).toLocaleString()}
                  </span>
                </div>
              )}

              {entry.lunchEnd && (
                <div>
                  <span className="font-medium">Lunch Ended</span> —{" "}
                  <span className="text-gray-500">
                    {new Date(entry.lunchEnd).toLocaleString()}
                  </span>
                </div>
              )}

              {entry.shiftEnd && (
                <div>
                  <span className="font-medium">Shift Ended</span> —{" "}
                  <span className="text-gray-500">
                    {new Date(entry.shiftEnd).toLocaleString()}
                  </span>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ActivityTracker;
