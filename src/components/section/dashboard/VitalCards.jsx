import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/Card";
import {
  Heart,
  Droplets,
  Moon,
  Activity,
  TrendingUp,
  Calendar,
  Droplet,
  Check,
} from "lucide-react";
import { Progress } from "../../ui/progress";
import { GrSteps } from "react-icons/gr";
import { BiWalk } from "react-icons/bi";

const VitalCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-blue-600 rounded-3xl">
        <div className="flex items-center justify-start gap-3 text-2xl font-semibold">
          <Moon className="text-2xl font-semibold text-blue-600" />
          Sleep
        </div>

        <div className="flex items-end justify-start gap-3 text-2xl font-medium text-gray-600 normal-case">
          <p className="text-5xl font-semibold text-blue-600">5.8</p>hours
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center justify-start gap-3 text-xl font-semibold text-red-500">
            <TrendingUp />
            Below target (-2.2h)
          </div>

          <div className="w-full h-4 bg-green-200 rounded-full">
            <div className="w-3/4 h-full bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-green-600 rounded-3xl">
        <div className="flex items-center justify-start gap-3 text-2xl font-semibold">
          <Droplets className="text-2xl font-semibold text-green-600" />
          Hydration
        </div>

        <div className="flex items-end justify-start gap-3 text-2xl font-medium text-gray-600 normal-case">
          <p className="text-5xl font-semibold text-green-600">1.8</p>L/2.5L
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center justify-start gap-3 text-xl font-semibold text-green-500">
            Good progress!
            <Droplet className="text-lg text-green-600" />
          </div>

          <div className="w-full h-4 bg-green-200 rounded-full">
            <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-red-600 rounded-3xl">
        <div className="flex items-center justify-start gap-3 text-2xl font-semibold">
          <Heart className="text-2xl font-semibold text-red-600" />
          Heart Rate
        </div>

        <div className="flex items-end justify-start gap-3 text-2xl font-medium text-gray-600 normal-case">
          <p className="text-5xl font-semibold text-red-600">68</p>mbp
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center justify-start gap-3 text-xl font-semibold text-green-500">
            Normal Range
            <Check />
          </div>

          <div className="w-full h-4 bg-green-200 rounded-full">
            <div className="w-3/4 h-full bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10 p-16 bg-white border-l-4 border-purple-600 rounded-3xl">
        <div className="flex items-center justify-start gap-3 text-2xl font-semibold">
          <GrSteps className="text-2xl font-semibold text-purple-600" />
          Steps
        </div>

        <div className="flex items-end justify-start gap-3 text-2xl font-medium text-gray-600 normal-case">
          <p className="text-5xl font-semibold text-purple-600">3.8K</p>10K
        </div>

        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center justify-start gap-3 text-xl font-semibold text-red-500">
            Let's walk more!
            <BiWalk />
          </div>

          <div className="w-full h-4 bg-green-200 rounded-full">
            <div className="w-3/4 h-full bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalCards;
