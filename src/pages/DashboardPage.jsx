import ClockingSystem from "../components/dashboardClockingSystem.jsx";
import StatusDisplay from "../components/dashboardStatusDisplay.jsx";
import TotalWorkingHours from "../components/dashboardTotalWorkingHours.jsx";
import ActivityTracker from "../components/dashboardActivityTracker.jsx";
import QuickActions from "../components/dashboardQuickActions.jsx";
import { Outlet } from "react-router-dom";

const DashboardPage = ({
  onStatusChange,
  status,
  setTemporaryStatus,
  temporaryStatus,
  shiftType,
  onShiftStatusChange,
  temporaryShiftStat,
  setTemporaryShiftStat,
  activityLog,
  isShiftLocked,
}) => {
  return (
    <>
      {/* Clocking System centered */}
      <div className="w-full flex justify-center">
        <ClockingSystem
          onStatusChange={onStatusChange}
          setTemporaryStatus={setTemporaryStatus}
          setTemporaryShiftStat={setTemporaryShiftStat}
          temporaryStatus={temporaryStatus}
          temporaryShiftStat={temporaryShiftStat}
          onShiftStatusChange={onShiftStatusChange}
          status={status}
          isShiftLocked={isShiftLocked}
        />
      </div>

      {/* 2x2 Grid for Status, Total Hours, Activity, Quick Actions */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
        <StatusDisplay status={status} shiftType={shiftType} />
        <TotalWorkingHours />
        <ActivityTracker status={status} activityLog={activityLog} />
        <QuickActions />
      </div>

      {/* Nested Routes */}
      <Outlet />
    </>
  );
};

export default DashboardPage;
