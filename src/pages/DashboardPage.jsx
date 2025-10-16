import ClockingSystem from "../components/dashboardClockingSystem.jsx";
import StatusDisplay from "../components/dashboardStatusDisplay.jsx";
import TotalWorkingHours from "../components/dashboardTotalWorkingHours.jsx";
import ActivityTracker from "../components/dashboardActivityTracker.jsx";
import WfhFilingPrompt from "../components/dashboardWFHFiling.jsx";
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
      {/* Clocking System */}
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

      {/* Status + Total Hours row */}
      <div className="mt-5 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-20">
        <StatusDisplay status={status} shiftType={shiftType} />
        <TotalWorkingHours />
      </div>

      {/* WFH Filing + Activity Tracker row */}
      <div className="mt-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-20">
        <ActivityTracker status={status} activityLog={activityLog} />
        <WfhFilingPrompt />
      </div>

      {/* Quick Actions row */}
      <div className="mt-10 flex flex-col md:flex-row md:justify-center gap-6 md:gap-20">
        <QuickActions />
      </div>

      {/* Nested Routes if any */}
      <Outlet />
    </>
  );
};

export default DashboardPage;
