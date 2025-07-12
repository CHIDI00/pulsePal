import { IoSettingsOutline } from "react-icons/io5";
import ProfileSettings from "./ProfileSettings";

export default function SettingsHeader() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-4">
        <h3 className="flex items-center gap-6 text-6xl text-blue-600 font-bold">
          settings <IoSettingsOutline className="text-6xl" />
        </h3>
        <p className="text-3xl normal-case text-gray-600">Manage your account and wellness preferences</p>
      </div>

      <div className="w-full flex items-center gap-5 p-2 rounded-2xl bg-gray-100">
        <div className="w-full shadow-lg bg-white rounded-2xl p-7 flex items-center text-center  justify-center cursor-pointer hover:scale-95 text-3xl font-semibold">
          profile
        </div>
        <div className="w-full rounded-2xl p-7 flex items-center text-center  justify-center cursor-pointer hover:scale-95 text-3xl font-semibold">
          notifications
        </div>
        <div className="w-full rounded-2xl p-7 flex items-center text-center  justify-center cursor-pointer hover:scale-95 text-3xl font-semibold">
          health
        </div>
        <div className="w-full rounded-2xl p-7 flex items-center text-center  justify-center cursor-pointer hover:scale-95 text-3xl font-semibold">
          privacy
        </div>
      </div>

      <div className="!mt-20">
        <ProfileSettings />
      </div>
    </div>
  );
}
