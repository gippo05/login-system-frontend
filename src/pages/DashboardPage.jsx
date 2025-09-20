import ClockingSystem from "../components/dashboardClockingSystem.jsx";
import StatusDisplay from "../components/dashboardStatusDisplay.jsx";
import TotalWorkingHours from "../components/dashboardTotalWorkingHours.jsx";


const DashboardPage = ({onStatusChange, 
                        status, 
                        setTemporaryStatus, 
                        temporaryStatus, 
                        shiftType, 
                        onShiftStatusChange, 
                        temporaryShiftStat,
                        setTemporaryShiftStat
                        }) => {

    return(
        <>

        <div>
            <ClockingSystem onStatusChange = {onStatusChange} 
                            setTemporaryStatus = {setTemporaryStatus} 
                            setTemporaryShiftStat={setTemporaryShiftStat}
                            temporaryStatus = {temporaryStatus}
                            temporaryShiftStat = {temporaryShiftStat}
                            onShiftStatusChange = {onShiftStatusChange}
                            status = {status}
                            />
        </div>
        
        <div className="mt-5 flex gap-42">
            <StatusDisplay status ={status} shiftType = {shiftType}/>
            <TotalWorkingHours />
        </div>
        
        
        
        
        </>
    )

}

export default DashboardPage;