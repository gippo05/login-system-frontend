import { useLocation } from "react-router-dom";
import { SidebarMenu } from "../data/sidebarmenu";

const TopBar = () => {
  const location = useLocation();

  // Find the menu item that matches the current path
  const currentItem = SidebarMenu.find((item) => item.link === location.pathname);

  return (
    <div className="w-full h-16 bg-[#f5f5f5] flex items-center justify-between px-6 shadow-md">
      <h1 className="text-xl font-semibold">
        {currentItem ? currentItem.title : "Dashboard"}
      </h1>

      {/* <div className="flex items-center gap-3">
        <span className="hidden sm:block">Welcome, Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=121212&color=fff"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div> */}
    </div>
  );
};

export default TopBar;
