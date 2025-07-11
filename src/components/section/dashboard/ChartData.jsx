import { Moon } from "lucide-react";
import React from "react";
import { BiPulse } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";

const ChartData = () => {
  return (
    <div className="grid gap-5 py-12 md:grid-cols-2">
      <div className="flex flex-col w-full p-10 bg-white py-14 rounded-3xl">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <Moon className="text-2xl font-semibold text-blue-600" />
            Sleep Trend (7 days)
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Your sleep hours over the past week
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full p-10 bg-white py-14 rounded-3xl">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <BiPulse className="text-4xl font-semibold text-purple-600" />
            Steps Progress
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Daily step count this week
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChartData;
