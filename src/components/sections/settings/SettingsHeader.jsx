import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import ProfileSettings from "./ProfileSettings";
import HealthSettings from "./HealthSettings";
import PrivacySettings from "./PrivacySettings";

export default function SettingsHeader() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      // case "notifications":
      //   return <div>Notifications settings coming soon.</div>;
      case "health":
        return <HealthSettings />;
      case "privacy":
        return <PrivacySettings />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full space-y-12">
      <div className="space-y-4">
        <h3 className="flex items-center gap-6 text-6xl font-bold text-blue-600">
          settings <IoSettingsOutline className="text-6xl" />
        </h3>
        <p className="text-3xl text-gray-600 normal-case">Manage your account and wellness preferences</p>
      </div>

      <div className="flex items-center gap-5 p-2 bg-gray-100 max-w-7xl rounded-2xl">
        {["profile", "health", "privacy"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center justify-center w-full text-3xl font-semibold text-center cursor-pointer rounded-2xl p-7 hover:scale-95 ${
              activeTab === tab ? "bg-white shadow-lg" : ""
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="!mt-20">{renderContent()}</div>
    </div>
  );
}
