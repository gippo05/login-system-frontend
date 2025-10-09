import { useLocation } from "react-router-dom";

//
const TopBar = () => {
  const location = useLocation();

    const SidebarMenu = [
    { id: 1, title: "Dashboard", link: "/dashboard" },
    { id: 2, title: "Attendance Table", link: "/attendance-table" },
    { id: 3, title: "Settings", link: "/settings" },
  ];

  // Find the menu item that matches the current path
  const currentItem = SidebarMenu.find((item) => item.link === location.pathname);

  return (
    <div className="w-full h-16 bg-[#F3F4F6] flex items-center justify-between px-6 shadow-md">
      <h1 className="text-xl font-semibold">
        {currentItem ? currentItem.title : "Dashboard"}
      </h1>
    </div>
  );
};

export default TopBar;
