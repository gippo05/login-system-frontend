import { Link, useLocation } from "react-router-dom";
import { 
  FaTachometerAlt, 
  FaTable, 
  FaCog, 
  FaSignOutAlt 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { path: "/dashboard/attendace-table", label: "Attendance Table", icon: <FaTable /> },
  { path: "/dashboard/settings", label: "Settings", icon: <FaCog /> },
];


const handleLogout = () =>{
  localStorage.removeItem("token");
  navigate("/", {replace: true});
}

  return (
    <div className="w-64 h-screen sticky top-0 bg-[#F5F5F5] flex flex-col p-5 shadow-md">
      {/* Logo */}
      <div className="mb-10 w-full flex justify-center">
        {/* <img src={main_logo} alt="logo" className="w-40" /> */}

        <h1 className="text-5xl">TimeWise</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto hide-scrollbar">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors 
                  ${
                    location.pathname === item.path
                      ? "bg-sky-300 text-black"
                      : "hover:bg-sky-300 hover:text-blue-700"
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout pinned at bottom */}
      <button 
      onClick={handleLogout}
      className="flex items-center gap-2 font-bold py-2 mt-auto px-3 rounded-lg hover:bg-gray-800 hover:text-red-400 transition-colors">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default SideBar;
