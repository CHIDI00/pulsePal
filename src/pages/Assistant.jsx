import HealthData from "@/components/sections/assistant/HealthData";
import QuickActions from "@/components/sections/assistant/QuickActions";
import ChatAssistant from "@/components/sections/assistant/ChatAssistant";

export default function Assistant() {
  return (
    <div className="flex md:flex-nowrap flex-wrap items-start w-full gap-10 !pb-10">
      <div className="md:flex-[3] flex flex-col space-y-10 w-full">
        <HealthData />
        <QuickActions />
      </div>
      <div className="md:flex-[6] w-full">
        <ChatAssistant />
      </div>
    </div>
  );
}
