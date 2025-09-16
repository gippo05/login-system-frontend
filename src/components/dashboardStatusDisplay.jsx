import { useState, useEffect } from "react";

const StatusDisplay = () => {
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
    <div className="w-3xl h-48 bg-[#f5f5f5] flex justify-between px-6 shadow-md rounded-2xl">
      <div>
        <h4 className="font-semibold mt-5">STATUS</h4>
        <h1 className="text-3xl mt-5 font-bold">Logged In</h1>
        <h3 className="text-3xl mt-5">{currentTime}</h3>
      </div>


    </div>
  );
};

export default StatusDisplay;
