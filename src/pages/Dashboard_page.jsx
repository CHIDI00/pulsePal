import ChartData from "./../components/sections/dashboard/ChartData";
import VitalCards from "./../components/sections/dashboard/VitalCards";
import WelcomeMessage from "./../components/sections/dashboard/WelcomeMessage";

const Dashboard_page = () => {
  return (
    <div className="w-full h-full">
      <WelcomeMessage />
      <VitalCards />
      <ChartData />
    </div>
  );
};

export default Dashboard_page;
