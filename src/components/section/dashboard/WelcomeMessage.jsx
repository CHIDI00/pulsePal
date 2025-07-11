import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const greeting = () => {
    const hour = date.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <h2 className="text-6xl font-bold text-green-700 normal-case">
        {greeting()}, Alex!
      </h2>
      <p className="text-2xl font-semibold text-gray-700 normal-case">
        {formattedDate}
      </p>
      <p className="text-2xl font-medium text-blue-700 normal-case">
        Let's check how you're doing today
      </p>
    </div>
  );
};

export default WelcomeMessage;
