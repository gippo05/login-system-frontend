import { useState } from "react";

const ActivityTracker = ({activityLog}) => {

 

  return (
       <div className="w-full max-w-3xl h-40 bg-[#f5f5f5] shadow-md rounded-2xl px-6 py-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Activity Tracker</h2>
      <ul className="space-y-2">
        {activityLog.length === 0 ? (
          <li className="text-gray-500">No activity yet</li>
        ) : (
          activityLog.map((entry, index) => (
            <li key={index} className="text-sm">
              <span className="font-medium">{entry.status}</span> ({entry.shift}) — 
              <span className="text-gray-500 ml-1">{entry.time}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ActivityTracker;
