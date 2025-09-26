import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Clocked-out");
  const [shiftType, setShiftType] = useState("RTO");
  const [temporaryShiftStat, setTemporaryShiftStat] = useState("Select Shift");
  const [temporaryStatus, setTemporaryStatus] = useState("Clocked-out");
  const [activityLog, setActivityLog] = useState([]);
  const [isShiftLocked, setIsShiftLocked] = useState(false);

  const onStatusChange = () => {
    setStatus(temporaryStatus);
    setShiftType(temporaryShiftStat);

    if (temporaryStatus === "Clocked-in") {
      setIsShiftLocked(true);
    }
    if (temporaryStatus === "Clocked-out") {
      setIsShiftLocked(false);
    }

    const timestamp = new Date().toLocaleString();
    setActivityLog((prevLog) => [
      ...prevLog,
      { status: temporaryStatus, shift: temporaryShiftStat, time: timestamp },
    ]);
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
        }
      />
    </Routes>
  );
}

export default App;
