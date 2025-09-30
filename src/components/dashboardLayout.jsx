import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar.jsx";
import TopBar from "../components/TopBar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          <Outlet /> {/* 👈 This is where pages swap */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
