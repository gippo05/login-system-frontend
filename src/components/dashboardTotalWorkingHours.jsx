import { useState, useEffect } from "react";

const TotalWorkingHours = () => {
  

 

  return (
    <>
      <div className="w-2xl h-24 bg-[#f5f5f5] flex items-center justify-around px-6 shadow-md rounded-2xl">
  {/* Total hours today */}
  <div className="text-center">
    <h4 className="font-semibold text-sm text-gray-600">Total Hours Worked today</h4>
    <h2 className="text-xl font-bold"></h2>
  </div>

  {/* Total hours this */}
  <div className="text-center">
    <h4 className="font-semibold text-sm text-gray-600">Total Hours worked this week</h4>
    <h2 className="text-xl font-bold"></h2>
  </div>
</div>
    </>
    




  );
};

export default TotalWorkingHours;
