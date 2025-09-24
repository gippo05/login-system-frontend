import { Routes, Route } from 'react-router-dom'
import SideBar from './components/Sidebar.jsx'
import './App.css'
import TopBar from './components/TopBar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import { useState } from 'react'

function App() {
  
  const [status, setStatus] = useState('Logged out');
  const [shiftType, setShiftType] = useState('RTO');
  const [temporaryShiftStat, setTemporaryShiftStat] = useState('Select Shift');
  const [temporaryStatus, setTemporaryStatus] = useState('Logged out');
  const [activityLog, setActivityLog] = useState([]);
  const [isShiftLocked, setIsShiftLocked] = useState(false);

  

  const onStatusChange = (e) => {
    setStatus(temporaryStatus);
    setShiftType(temporaryShiftStat);

    if(temporaryStatus === 'Login'){
      setIsShiftLocked(true);
    }
    if(temporaryStatus === 'Logout'){
      setIsShiftLocked(false);
    }



    const timestamp = new Date().toLocaleString();
  setActivityLog(prevLog => [
    ...prevLog,
    {status: temporaryStatus, shift: temporaryShiftStat, time: timestamp}
  ]);
  }

  return (
    <>
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <TopBar />

        <main className='flex-1 p-6'>
          <Routes>
            <Route path='/*' element = {<DashboardPage 
            onStatusChange={onStatusChange} 
            status = {status}
            temporaryStatus = {temporaryStatus}
            shiftType = {shiftType}
            temporaryShiftStat = {temporaryShiftStat}
            setTemporaryStatus = {setTemporaryStatus}
            setTemporaryShiftStat ={setTemporaryShiftStat}
            activityLog={activityLog}
            isShiftLocked = {isShiftLocked}
            />} />

          </Routes>

        </main>
      </div>
      
    </div>
    
    </>
  )
}

export default App
