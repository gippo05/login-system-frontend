import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const StatusDisplay = ({ status, shiftType }) => {
  const [currentTime, setCurrentTime] = useState("");

  // 🕒 Format function with AM/PM
  const formattedTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  };

  useEffect(() => {
    setCurrentTime(formattedTime(new Date()));
    const interval = setInterval(() => {
      setCurrentTime(formattedTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <CardHeader className="pb-2">
        <h2 className="text-lg font-bold text-gray-800 text-center">
          Current Status Overview
        </h2>
      </CardHeader>
      <CardContent className="flex items-center justify-around p-4">
        {/* Status */}
        <div className="text-center">
          <h4 className="font-medium text-sm text-gray-500">Status</h4>
          <h2 className="text-2xl font-bold ">{status}</h2>
        </div>

        {/* Shift Type */}
        <div className="text-center">
          <h4 className="font-medium text-sm text-gray-500">Shift Type</h4>
          <h2 className="text-2xl font-bold ">{shiftType}</h2>
        </div>

        {/* Time */}
        <div className="text-center">
          <h4 className="font-medium text-sm text-gray-500">Time</h4>
          <h2 className="text-2xl font-bold ">{currentTime}</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusDisplay;
