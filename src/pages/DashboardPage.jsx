import ClockingSystem from "../components/dashboardClockingSystem.jsx";
import StatusDisplay from "../components/dashboardStatusDisplay.jsx";
import TotalWorkingHours from "../components/dashboardTotalWorkingHours.jsx";
const DashboardPage = () => {

    return(
        <>

        <div>
            <ClockingSystem />
        </div>
        
        <div className="mt-5 flex gap-42">
            <StatusDisplay />
            <TotalWorkingHours />
        </div>
        
        
        
        
        </>
    )

}

export default DashboardPage;