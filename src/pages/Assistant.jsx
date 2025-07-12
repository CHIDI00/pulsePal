import ChatAssistant from "../components/sections/Assistant/ChatAssistant";
import HealthData from "../components/sections/Assistant/HealthData";
import QuickActions from "../components/sections/Assistant/QuickActions";

export default function Assistant() {
  return (
    <div className="flex md:flex-nowrap flex-wrap items-start w-full gap-10 !pb-28">
      <div className="md:flex-[3] h-screen flex flex-col space-y-10 w-full">
        <HealthData />
        <QuickActions />
      </div>
      <div className="md:flex-[6] w-full">
        <ChatAssistant />
      </div>
    </div>
  );
}
