import React from "react";
import WelcomeMessage from "../components/section/dashboard/WelcomeMessage";
import VitalCards from "../components/section/dashboard/VitalCards";
import ChartData from "../components/section/dashboard/ChartData";

const Dashboard_page = () => {
  return (
    <div className="w-full h-full px-12 bg-green-50">
      <WelcomeMessage />
      <VitalCards />
      <ChartData />
    </div>
  );
};

export default Dashboard_page;
