import { Routes, Route } from 'react-router-dom'
import SideBar from './components/Sidebar.jsx'
import './App.css'
import TopBar from './components/TopBar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import { useState } from 'react'

function App() {
  
  const [status, setStatus] = useState('Logged out');
  const [shiftType, setShiftType] = useState('RTO');
  const [temporaryShiftStat, setTemporaryShiftStat] = useState('RTO');
  const [temporaryStatus, setTemporaryStatus] = useState('Logged out');

  const onStatusChange = (e) => {
    setStatus(temporaryStatus);
    setShiftType(temporaryShiftStat);
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
            />} />

          </Routes>

        </main>
      </div>
      
    </div>
    
    </>
  )
}

export default App
