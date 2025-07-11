import { Moon } from "lucide-react";
import { BiPulse } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const sleepData = [
  { day: "Mon", hours: 7.2 },
  { day: "Tue", hours: 6.8 },
  { day: "Wed", hours: 5.5 },
  { day: "Thu", hours: 6.2 },
  { day: "Fri", hours: 5.8 },
  { day: "Sat", hours: 8.1 },
  { day: "Sun", hours: 7.5 },
];

const stepsData = [
  { day: "Mon", steps: 8200 },
  { day: "Tue", steps: 6800 },
  { day: "Wed", steps: 4200 },
  { day: "Thu", steps: 7500 },
  { day: "Fri", steps: 3800 },
  { day: "Sat", steps: 9200 },
  { day: "Sun", steps: 7800 },
];

const ChartData = () => {
  return (
    <div className="grid gap-5 py-12 md:grid-cols-2">
      <div className="flex flex-col w-full gap-10 p-10 bg-white py-14 rounded-3xl hover:-translate-y-4 hover:shadow-lg">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <Moon className="text-2xl font-semibold text-blue-600" />
            Sleep Trend (7 days)
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Your sleep hours over the past week
          </p>
        </div>

        {/* <div className="w-full p-6 pt-0"> */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Line
              type="monotone"
              dataKey="hours"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        {/* </div> */}
      </div>
      <div className="flex flex-col w-full gap-10 p-10 bg-white py-14 rounded-3xl hover:-translate-y-4 hover:shadow-lg">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <BiPulse className="text-4xl font-semibold text-purple-600" />
            Steps Progress
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Daily step count this week
          </p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stepsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar dataKey="steps" fill="#a855f7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartData;
