import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <h2 className="text-6xl font-bold text-green-700 normal-case">
        Good morning, Alex!
      </h2>
      <p className="text-2xl font-semibold text-gray-700 normal-case">
        Friday, July 11, 2025
      </p>
      <p className="text-2xl font-medium text-blue-700 normal-case">
        Let's check how you're doing today
      </p>
    </div>
  );
};

export default WelcomeMessage;
