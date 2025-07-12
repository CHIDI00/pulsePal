import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { GoPulse } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import Loader from "../../ui/Loader";

export default function HealthData() {
  const [vitals, setVitals] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pulsepal.vercel.app/api/health", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const health = data?.data?.[0];
        setVitals(health);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GET request failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  if (!vitals)
    return (
      <div className="flex items-center justify-center w-full py-10">
        <p className="text-2xl font-bold text-red-600">
          {" "}
          No health data available.
        </p>
      </div>
    );

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
            <span className="text-4xl font-semibold text-blue-500 normal-case">
              {vitals.sleepHours}h
            </span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-blue-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <IoWaterOutline className="text-4xl text-green-500" />
              hydration
            </div>
            <span className="text-4xl font-semibold text-green-500">
              {vitals.hydrationLiters}%
            </span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-red-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <CiHeart className="text-4xl text-red-500" /> heart rate
            </div>
            <span className="text-4xl font-semibold text-red-500 normal-case">
              {vitals.heartRate} bpm{" "}
            </span>
          </div>
          <div className="flex items-center justify-between p-12 rounded-2xl bg-gray-50">
            <div className="flex items-center gap-5 text-3xl font-medium">
              <GoPulse className="text-4xl text-purple-500" />
              steps
            </div>
            <span className="text-4xl font-semibold text-purple-500">
              {(vitals.stepsToday / 1000).toFixed(1)}k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
