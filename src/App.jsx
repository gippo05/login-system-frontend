import { Routes, Route, Navigate } from 'react-router-dom'
import SideBar from './components/Sidebar.jsx'
import './App.css'
import TopBar from './components/TopBar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'

function App() {
  

  return (
    <>
    <div className='flex h-screen'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
        <TopBar />

        <main className='flex-1 p-6'>
          <Routes>
            <Route path='/*' element = {<DashboardPage />} />

          </Routes>

        </main>
      </div>
      
    </div>
    
    </>
  )
}

export default App
