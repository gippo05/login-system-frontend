import ClockingSystem from "../components/dashboardClockingSystem.jsx";
import StatusDisplay from "../components/dashboardStatusDisplay.jsx";
import TotalWorkingHours from "../components/dashboardTotalWorkingHours.jsx";
import ActivityTracker from "../components/dashboardActivityTracker.jsx";
import WfhFilingPrompt from "../components/dashboardWFHFiling.jsx";

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
      <div>
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
      <div className="mt-5 flex gap-40">
        <StatusDisplay status={status} shiftType={shiftType} />
        <TotalWorkingHours />
      </div>

      {/* WFH Filing + Activity Tracker row */}
      <div className="mt-10 flex gap-40">
        <ActivityTracker status={status} activityLog={activityLog} />
        <WfhFilingPrompt />
        
      </div>
    </>
  );
};

export default DashboardPage;
