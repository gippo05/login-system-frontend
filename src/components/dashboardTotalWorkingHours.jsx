import { useState, useEffect } from "react";

const TotalWorkingHours = () => {
  return (
    <div className="w-full bg-[#f5f5f5] flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-4 sm:gap-10 px-6 py-4 shadow-md rounded-2xl">
      {/* Total hours today */}
      <div className="text-center flex-1">
        <h4 className="font-semibold text-sm text-gray-600">
          Total Hours Worked Today
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">
          {/* dynamically insert hours here */}
          --
        </h2>
      </div>

      {/* Divider for bigger screens */}
      <div className="hidden sm:block w-px bg-gray-300"></div>

      {/* Total hours this week */}
      <div className="text-center flex-1">
        <h4 className="font-semibold text-sm text-gray-600">
          Total Hours Worked This Week
        </h4>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">
          {/* dynamically insert hours here */}
          --
        </h2>
      </div>
    </div>
  );
};

export default TotalWorkingHours;
