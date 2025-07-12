import { IoSettingsOutline } from "react-icons/io5";
import ProfileSettings from "./ProfileSettings";
import HealthSettings from "./HealthSettings";

export default function SettingsHeader() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-4">
        <h3 className="flex items-center gap-6 text-6xl font-bold text-blue-600">
          settings <IoSettingsOutline className="text-6xl" />
        </h3>
        <p className="text-3xl text-gray-600 normal-case">Manage your account and wellness preferences</p>
      </div>

      <div className="flex items-center w-full gap-5 p-2 bg-gray-100 rounded-2xl">
        <div className="flex items-center justify-center w-full text-3xl font-semibold text-center bg-white shadow-lg cursor-pointer rounded-2xl p-7 hover:scale-95">
          profile
        </div>
        <div className="flex items-center justify-center w-full text-3xl font-semibold text-center cursor-pointer rounded-2xl p-7 hover:scale-95">
          notifications
        </div>
        <div className="flex items-center justify-center w-full text-3xl font-semibold text-center cursor-pointer rounded-2xl p-7 hover:scale-95">
          health
        </div>
        <div className="flex items-center justify-center w-full text-3xl font-semibold text-center cursor-pointer rounded-2xl p-7 hover:scale-95">
          privacy
        </div>
      </div>

      <div className="!mt-20">
        <ProfileSettings />
        <HealthSettings />
      </div>
    </div>
  );
}
