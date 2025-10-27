import { useState, useEffect } from "react";
import axios from "axios";

const TotalWorkingHours = () => {
  const [shiftDuration, setShiftDuration] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get(
          "https://timewise-login-system-backend.onrender.com/api/activity/all-attendance",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const attendance = res.data;
        if (attendance.length > 0) {
          // get latest record (most recent shift)
          const latestShift = attendance[attendance.length - 1];
          setShiftDuration(latestShift.shiftDuration);
        }
      } catch (err) {
        console.error("Failed to fetch shift data:", err);
      }
    };

    fetchActivities();
  }, [token]);

  return (
    <div className="w-full bg-[#f5f5f5] flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-4 sm:gap-10 px-6 py-4 shadow-md rounded-2xl">
      {/* Total hours today */}
      <div className="text-center flex-1">
        <h4 className="font-semibold text-sm text-gray-600">
          Total Hours Worked Today
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">
          {shiftDuration
            ? `${Math.floor(shiftDuration / 60)}h ${shiftDuration % 60}m`
            : "No shift data yet"}
        </h2>
      </div>

      {/* Divider for bigger screens */}
      <div className="hidden sm:block w-px bg-gray-300"></div>

      {/* Total hours this week */}
      <div className="text-center flex-1">
        <h4 className="font-semibold text-sm text-gray-600">
          Total Hours Worked This Week
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">--</h2>
      </div>
    </div>
  );
};

export default TotalWorkingHours;
