import React, { useEffect, useState } from "react";
import {
  Heart,
  Droplets,
  Moon,
  TrendingUp,
  Droplet,
  Check,
} from "lucide-react";
import { GrSteps } from "react-icons/gr";
import { BiWalk } from "react-icons/bi";
import Loader from "../../ui/Loader";

const VitalCards = () => {
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

  const hydrationTarget = 2.5; // Liters
  const stepsTarget = 10000; // Steps

  const hydrationPercent = Math.min(
    (vitals.hydrationLiters / hydrationTarget) * 100,
    100
  );
  const stepsPercent = Math.min((vitals.stepsToday / stepsTarget) * 100, 100);
  const sleepPercent = Math.min((vitals.sleepHours / 8) * 100, 100); // assuming 8h target
  const heartRatePercent = Math.min((vitals.heartRate / 120) * 100, 100); // assuming 120 max bpm

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Sleep */}
      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-blue-600 rounded-3xl hover:-translate-y-4 hover:shadow-lg">
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <Moon className="text-blue-600" />
          Sleep
        </div>
        <div className="flex items-end gap-2 text-2xl text-gray-600">
          <p className="text-5xl font-semibold text-blue-600">
            {vitals.sleepHours}
          </p>
          hours
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xl font-semibold text-red-500">
            <TrendingUp />
            {vitals.sleepHours < 8
              ? `Below target (-${(8 - vitals.sleepHours).toFixed(1)}h)`
              : "Target met"}
          </div>
          <div className="w-full h-4 bg-green-200 rounded-full">
            <div
              className="h-full bg-blue-400 rounded-full"
              style={{ width: `${sleepPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Hydration */}
      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-green-600 rounded-3xl hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <Droplets className="text-green-600" />
          Hydration
        </div>
        <div className="flex items-end gap-2 text-2xl text-gray-600">
          <p className="text-5xl font-semibold text-green-600">
            {vitals.hydrationLiters}
          </p>
          L / {hydrationTarget}L
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xl font-semibold text-green-500">
            {hydrationPercent >= 100 ? "Hydrated!" : "Good progress!"}
            <Droplet className="text-green-600" />
          </div>
          <div className="w-full h-4 bg-green-200 rounded-full">
            <div
              className="h-full bg-green-400 rounded-full"
              style={{ width: `${hydrationPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Heart Rate */}
      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-red-600 rounded-3xl hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <Heart className="text-red-600" />
          Heart Rate
        </div>
        <div className="flex items-end gap-2 text-2xl text-gray-600">
          <p className="text-5xl font-semibold text-red-600">
            {vitals.heartRate}
          </p>
          bpm
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xl font-semibold text-green-500">
            {vitals.heartRate >= 60 && vitals.heartRate <= 100
              ? "Normal Range"
              : "Check your pulse"}
            <Check />
          </div>
          <div className="w-full h-4 bg-green-200 rounded-full">
            <div
              className="h-full bg-blue-400 rounded-full"
              style={{ width: `${heartRatePercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-purple-600 rounded-3xl hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-3 text-2xl font-semibold">
          <GrSteps className="text-purple-600" />
          Steps
        </div>
        <div className="flex items-end gap-2 text-2xl text-gray-600">
          <p className="text-5xl font-semibold text-purple-600">
            {(vitals.stepsToday / 1000).toFixed(1)}K
          </p>
          / 10K
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xl font-semibold text-red-500">
            {stepsPercent >= 100 ? "Great job!" : "Let's walk more!"}
            <BiWalk />
          </div>
          <div className="w-full h-4 bg-green-200 rounded-full">
            <div
              className="h-full bg-blue-400 rounded-full"
              style={{ width: `${stepsPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalCards;
