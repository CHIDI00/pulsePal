// components/Progress.jsx
import React from "react";
import { cn } from "../../lib/utils";

const Progress = ({ className, value = 0, ...props }) => {
  return (
    <div
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <div
        className="h-full transition-all bg-primary"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export { Progress };
