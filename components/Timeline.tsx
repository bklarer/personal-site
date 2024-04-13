// Timeline.tsx
import React from "react";

export interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {children}
      </ol>
    </div>
  );
};

export default Timeline;
