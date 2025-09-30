import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useState } from "react";
import "./App.css";
import axios from "axios";

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
    "End-Lunch": "/api/status/lunch-end"
  };

  const onStatusChange = async () => {
  try {
    // 1. Update local states
    setStatus(temporaryStatus);
    setShiftType(temporaryShiftStat);

    if (temporaryStatus === "Clocked-in") {
      setIsShiftLocked(true);
    }
    if (temporaryStatus === "Clocked-out") {
      setIsShiftLocked(false);
    }

    // 2. Call backend API
    const endpoint = statusEndpoints[temporaryStatus];
    if (endpoint) {
      const token = localStorage.getItem("token"); // JWT from login
      const res = await axios.post(
        `http://localhost:3000${endpoint}`,
        { shiftType: temporaryShiftStat }, // 👈 send shift type too
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("✅ Backend updated:", res.data);
    }

    // 3. Update activity log
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

      {/* Dashboard Page */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
          <div className="flex h-screen">
            <SideBar />
            <div className="flex-1 flex flex-col">
              <TopBar />
              <main className="flex-1 p-6">
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
              </main>
            </div>
          </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
