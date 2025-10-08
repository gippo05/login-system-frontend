import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SideBar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AttendanceTable from "./components/AttendanceTable.jsx";
import { useState } from "react";
import "./App.css";
import axios from "axios";

// Dashboard layout wrapper
function DashboardLayout({
  onStatusChange,
  status,
  temporaryStatus,
  shiftType,
  temporaryShiftStat,
  setTemporaryStatus,
  setTemporaryShiftStat,
  activityLog,
  isShiftLocked,
}) {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          {/* Nested routes render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  const [status, setStatus] = useState("Clocked-out");
  const [shiftType, setShiftType] = useState("RTO");
  const [temporaryShiftStat, setTemporaryShiftStat] = useState("Select Shift");
  const [temporaryStatus, setTemporaryStatus] = useState("Clocked-out");
  const [activityLog, setActivityLog] = useState([]);
  const [isShiftLocked, setIsShiftLocked] = useState(false);

  const statusEndpoints = {
    "Clocked-in": "/api/status/clock-in",
    "Clocked-out": "/api/status/clock-out",
    "Lunch": "/api/status/lunch-start",
    "End-Lunch": "/api/status/lunch-end",
  };

  const onStatusChange = async () => {
    try {
      setStatus(temporaryStatus);
      setShiftType(temporaryShiftStat);

      if (temporaryStatus === "Clocked-in") setIsShiftLocked(true);
      if (temporaryStatus === "Clocked-out") setIsShiftLocked(false);

      const endpoint = statusEndpoints[temporaryStatus];
      if (endpoint) {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          `https://timewise-login-system-backend.onrender.com${endpoint}`,
          { shiftType: temporaryShiftStat },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("✅ Backend updated:", res.data);
      }

      const timestamp = new Date().toLocaleString();
      setActivityLog((prevLog) => [
        ...prevLog,
        { status: temporaryStatus, shift: temporaryShiftStat, time: timestamp },
      ]);
    } catch (error) {
      console.error("❌ Error updating status:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to update status");
    }
  };

  return (
    <Routes>
      {/* Redirect root "/" to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard parent route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout
              onStatusChange={onStatusChange}
              status={status}
              temporaryStatus={temporaryStatus}
              shiftType={shiftType}
              temporaryShiftStat={temporaryShiftStat}
              setTemporaryStatus={setTemporaryStatus}
              setTemporaryShiftStat={setTemporaryShiftStat}
              activityLog={activityLog}
              isShiftLocked={isShiftLocked}
            />
          </ProtectedRoute>
        }
      >
        {/* Default dashboard widgets */}
        <Route
          index
          element={
            <DashboardPage
              onStatusChange={onStatusChange}
              status={status}
              temporaryStatus={temporaryStatus}
              shiftType={shiftType}
              temporaryShiftStat={temporaryShiftStat}
              setTemporaryStatus={setTemporaryStatus}
              setTemporaryShiftStat={setTemporaryShiftStat}
              activityLog={activityLog}
              isShiftLocked={isShiftLocked}
            />
          }
        />

        {/* Attendance table page */}
        <Route path="attendance-table" element={<AttendanceTable />} />
      </Route>
    </Routes>
  );
}
//
export default App;
