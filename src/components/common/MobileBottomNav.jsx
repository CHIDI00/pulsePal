import React from "react";
import { FiHome, FiMessageSquare, FiSettings, FiUser, FiBell } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();

  // Check if current route matches nav item
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around py-3">
        {/* Dashboard */}
        <Link to="/dashboard" className={`flex flex-col items-center ${isActive("/dashboard") ? "text-green-600 font-semibold" : "text-gray-500"}`}>
          <FiHome className={`text-4xl ${isActive("/dashboard") ? "text-green-600 font-semibold" : "text-gray-500"}`} />
          <span className="mt-1 text-3xl">Dashboard</span>
        </Link>

        {/* AI Assistant */}
        <Link to="/assistant" className={`flex flex-col items-center ${isActive("/assistant") ? "text-green-600 font-semibold" : "text-gray-500"}`}>
          <FiMessageSquare className={`text-4xl ${isActive("/assistant") ? "text-green-600 font-semibold" : "text-gray-500"}`} />
          <span className="mt-1 text-3xl">AI Assistant</span>
        </Link>

        {/* Notifications (optional) */}
        {/* <Link to="/notifications" className={`flex flex-col items-center ${isActive("/notifications") ? "text-green-600 font-semibold" : "text-gray-500"}`}>
          <div className="relative">
            <FiBell className={`text-4xl ${isActive("/notifications") ? "text-green-600 font-semibold" : "text-gray-500"}`} />
            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">3</span>
          </div>
          <span className="mt-1 text-3xl">Alerts</span>
        </Link> */}

        {/* Profile (optional) */}
        {/* <Link to="/settings" className={`flex flex-col items-center ${isActive("/profile") ? "text-green-600 font-semibold" : "text-gray-500"}`}>
          <FiUser className={`text-4xl ${isActive("/profile") ? "text-green-600 font-semibold" : "text-gray-500"}`} />
          <span className="mt-1 text-3xl">Profile</span>
        </Link> */}

        {/* Settings */}
        <Link to="/settings" className={`flex flex-col items-center ${isActive("/settings") ? "text-green-600 font-semibold" : "text-gray-500"}`}>
          <FiSettings className={`text-4xl ${isActive("/settings") ? "text-green-600 font-semibold" : "text-gray-500"}`} />
          <span className="mt-1 text-3xl">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
