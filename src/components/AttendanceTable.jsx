import { useEffect, useState } from "react";
import axios from "axios";

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const token = localStorage.getItem("token"); // assuming JWT stored here
        const res = await axios.get("https://timewise-login-system-backend.onrender.com/api/activity/all-attendance", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAttendance(res.data);
      } catch (err) {
        setError("Failed to fetch attendance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  if (loading) return <p className="text-gray-600">Loading attendance...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Shift Type</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Clocked In</th>
            <th className="px-4 py-2 text-left">Clocked Out</th>
            <th className="px-4 py-2 text-left">Lunch</th>
            <th className="px-4 py-2 text-left">End Lunch</th>
            <th className="px-4 py-2 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {attendance.length > 0 ? (
            attendance.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border">{item.firstname} {item.lastname}</td>
                <td className="px-4 py-2 border">{item.shiftType}</td>
                <td className="px-4 py-2 border">{new Date(item.date).toLocaleDateString()}</td>
                <td className="px-4 py-2 border">{new Date(item.shiftStart).toLocaleTimeString()}</td>
                <td className="px-4 py-2 border">{new Date(item.shiftEnd).toLocaleTimeString()}</td>
                <td className="px-4 py-2 border">{new Date(item.lunchStart).toLocaleTimeString()}</td>
                <td className="px-4 py-2 border">{new Date(item.lunchEnd).toLocaleTimeString()}</td>
                <td className="px-4 py-2 border">{item.remarks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center px-4 py-4 text-gray-500">
                No attendance records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
