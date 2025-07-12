import { useEffect, useState } from "react";
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
import Loader from "../../ui/Loader";

const ChartData = () => {
  const [sleepData, setSleepData] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pulsepal.vercel.app/api/health", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const records = data?.data || [];

        // Assuming the data is in reverse chronological order
        const last7 = records.slice(-7);

        // Map data for chart
        const mappedSleep = last7.map((item, i) => ({
          day: getDayName(i), // Mon, Tue, etc.
          hours: item.sleepHours,
        }));

        const mappedSteps = last7.map((item, i) => ({
          day: getDayName(i),
          steps: item.stepsToday,
        }));

        setSleepData(mappedSleep);
        setStepsData(mappedSteps);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch chart data:", err);
        setLoading(false);
      });
  }, []);

  const getDayName = (index) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[index % 7];
  };

  if (loading) return <Loader />;

  return (
    <div className="grid gap-5 py-12 md:grid-cols-2">
      {/* Sleep Chart */}
      <div className="flex flex-col w-full gap-10 p-10 bg-white py-14 rounded-3xl hover:-translate-y-4 hover:shadow-lg">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <Moon className="text-2xl text-blue-600" />
            Sleep Trend (7 days)
          </div>
          <p className="text-xl font-semibold text-gray-500">
            Your sleep hours over the past week
          </p>
        </div>

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
      </div>

      {/* Steps Chart */}
      <div className="flex flex-col w-full gap-10 p-10 bg-white py-14 rounded-3xl hover:-translate-y-4 hover:shadow-lg">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-start gap-3 text-4xl font-semibold">
            <BiPulse className="text-4xl text-purple-600" />
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
