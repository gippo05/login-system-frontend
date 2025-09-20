import { useState, useEffect } from "react";

const StatusDisplay = ({status, shiftType}) => {
  const [currentTime, setCurrentTime] = useState("");

  // Format function with AM/PM
  const formattedTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // convert 0 to 12

    return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  };

  useEffect(() => {
    // Set initial time
    setCurrentTime(formattedTime(new Date()));

    // Update every second
    const interval = setInterval(() => {
      setCurrentTime(formattedTime(new Date()));
    }, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-3xl h-24 bg-[#f5f5f5] flex items-center justify-around px-6 shadow-md rounded-2xl">
  {/* Status */}
  <div className="text-center">
    <h4 className="font-semibold text-sm text-gray-600">Status</h4>
    <h2 className="text-xl font-bold">{status}</h2>
  </div>

  {/* Shift Type */}
  <div className="text-center">
    <h4 className="font-semibold text-sm text-gray-600">Shift Type</h4>
    <h2 className="text-xl font-bold">{shiftType}</h2>
  </div>

  {/* Time */}
  <div className="text-center">
    <h4 className="font-semibold text-sm text-gray-600">Time</h4>
    <h2 className="text-xl font-bold">{currentTime}</h2>
  </div>
</div>

  );
};

export default StatusDisplay;
