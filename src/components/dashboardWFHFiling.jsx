import { useState } from "react";

const WfhFilingPrompt = () => {
  const [filed, setFiled] = useState(null); // null = unanswered, true/false after click

  return (
    <div className="bg-[#f5f5f5] shadow-md rounded-2xl p-6 w-full max-w-2xl h-40">
      {filed === null ? (
        <>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
           IF APPLICABLE: Have you filed your on-duty for your WFH yesterday?
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setFiled(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={() => setFiled(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              No
            </button>
          </div>
        </>
      ) : filed ? (
        <p className="text-green-600 font-medium">Thank you! ✅</p>
      ) : (
        <p className="text-red-600 font-medium">
          Please make sure to file it today.
        </p>
      )}
    </div>
  );
};

export default WfhFilingPrompt;
