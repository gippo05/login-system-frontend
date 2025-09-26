import { Link } from "react-router-dom";
import { Calendar, Clock, User, FileText } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { name: "Leave Request", to: "/leave-filing", icon: Calendar, color: "text-green-600" },
    { name: "View Attendance", to: "/attendance-history", icon: Clock, color: "text-blue-600" },
    { name: "Profile Settings", to: "/profile", icon: User, color: "text-purple-600" },
    { name: "Reports", to: "/reports", icon: FileText, color: "text-orange-600" },
  ];

  return (
    <div className="bg-[#f5f5f5] shadow-md rounded-2xl p-6 w-full max-w-3xl">
      <h2 className="font-semibold text-2xl mb-4">⚡ Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.to}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow hover:shadow-lg 
                       transition-all duration-200 border border-gray-100 hover:bg-gray-50"
          >
            <action.icon className={`w-8 h-8 mb-2 ${action.color}`} />
            <span className="font-medium text-gray-700 text-sm">{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
