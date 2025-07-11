import { CiHeart } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { GoPulse } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";

export default function HealthData() {
  return (
    <div className="w-full p-16 bg-white rounded-2xl hover:-translate-y-4">
      <div className="space-y-7">
        <h3 className="flex items-center text-5xl font-semibold text-nowrap gap-7">
          <CiHeart className="text-red-600 text-7xl" />
          live health data
        </h3>

        <div className="space-y-8">
          <div className="flex items-center justify-between p-12 rounded-2xl bg-green-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <FaRegMoon className="text-4xl text-blue-500" />
              sleep
            </div>
            <span className="text-4xl font-semibold text-blue-500">5.8h</span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-blue-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <IoWaterOutline className="text-4xl text-green-500" />
              hydration
            </div>
            <span className="text-4xl font-semibold text-green-500">72%</span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-red-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <CiHeart className="text-4xl text-red-500" /> heart rate
            </div>
            <span className="text-4xl font-semibold text-red-500 normal-case">68 bpm </span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <GoPulse className="text-4xl text-purple-500" />
              steps
            </div>
            <span className="text-4xl font-semibold text-purple-500">3.8k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
