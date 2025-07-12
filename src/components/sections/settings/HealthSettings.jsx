import { CiHeart } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { PiPlugsConnected } from "react-icons/pi";
import { SiFitbit } from "react-icons/si";

export default function HealthSettings() {
  return (
    <div className="w-full p-10 bg-white shadow-lg rounded-2xl">
      <div className="space-y-14">
        <div className="space-y-12">
          <h3 className="flex items-center gap-4 text-5xl font-semibold text-nowrap">
            <CiHeart className="text-6xl text-red-500" />
            Health Goals & Integrations
          </h3>

          <p className="text-3xl font-medium">daily goals</p>
        </div>

        <hr className="w-full h-px bg-gray-400" />

        <div className="w-full">
          <form className="w-full">
            <div className="grid !mb-16 sm:grid-cols-2 items-center grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> sleep goal (Hours)</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter sleep goal..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> steps goal </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter steps goal..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> Water Intake (L)</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter water level..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> Exercise (minutes)</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter exercise time..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
            </div>

            <hr className="w-full h-px bg-gray-400" />

            <div className="w-full mt-12 space-y-8">
              <h3 className="flex items-center gap-4 text-4xl font-semibold text-nowrap">
                <PiPlugsConnected className="text-5xl" />
                Health App Integrations
              </h3>
              <div className="space-y-10">
                <div className="flex items-center justify-between w-full gap-10 p-10 border border-gray-300 rounded-3xl hover:-translate-y-4">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center justify-center w-20 h-20 text-red-700 bg-red-300 rounded-full">
                      <FaHeartPulse className="text-5xl" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-4xl font-semibold">apple health</h4>
                      <p className="text-[1.7rem] font-medium normal-case">Sync health data</p>
                    </div>
                  </div>
                  <div className="flex items-center px-6 py-2 text-2xl font-semibold text-green-500 border border-green-300 rounded-full h-fit w-fit">
                    connected
                  </div>
                </div>

                <div className="flex items-center justify-between w-full gap-10 p-10 border border-gray-300 rounded-3xl hover:-translate-y-4">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center justify-center w-20 h-20 text-blue-700 bg-blue-300 rounded-full">
                      <FaGoogle className="text-5xl" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-4xl font-semibold"> google fit</h4>
                      <p className="text-[1.7rem] font-medium normal-case">Activity and fitness data</p>
                    </div>
                  </div>
                  <div className="flex items-center px-6 py-5 text-2xl font-semibold text-gray-600 bg-gray-200 border border-gray-300 rounded-full cursor-pointer hover:scale-95 h-fit w-fit">
                    connect
                  </div>
                </div>
                <div className="flex items-center justify-between w-full gap-10 p-10 border border-gray-300 rounded-3xl hover:-translate-y-4">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center justify-center w-20 h-20 text-gray-700 bg-gray-300 rounded-full">
                      <SiFitbit className="text-5xl" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-4xl font-semibold">Fitbit</h4>
                      <p className="text-[1.7rem] font-medium normal-case">Wearable device data</p>
                    </div>
                  </div>
                  <div className="flex items-center px-6 py-5 text-2xl font-semibold text-gray-600 bg-gray-200 border border-gray-300 rounded-full cursor-pointer hover:scale-95 h-fit w-fit">
                    connect
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
