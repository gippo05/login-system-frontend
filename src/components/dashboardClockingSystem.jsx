const ClockingSystem = ({
  onStatusChange,
  temporaryStatus,
  setTemporaryStatus,
  temporaryShiftStat,
  setTemporaryShiftStat,
  status
}) => { 
  const date = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const currentDate = date.getDate();
  const year = date.getFullYear();

  const today = `${dayOfWeek}, ${month} ${currentDate}, ${year}`;

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8 flex items-center justify-between mt-5">
    
      <div>
        <h2 className="text-3xl font-bold text-gray-800">👋 Welcome, User!</h2>
        <p className="text-gray-500 mt-2">{today}</p>
      </div>

      
      <div className="flex items-center gap-4">
        
        <select
          name="worktype"
          id="worktype"
          value={temporaryShiftStat}
          onChange={(e) => setTemporaryShiftStat(e.target.value)}
          disabled={status === "Login"}
          className="px-4 py-2 text-lg rounded-xl border border-gray-300 
                     focus:ring-2 focus:ring-blue-400 focus:outline-none
                     disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
                     transition-colors duration-200 cursor-pointer"
        >
          <option value="WFH">WFH</option>
          <option value="RTO">RTO</option>
        </select>

        {/* Status select */}
        <select
          name="status"
          id="status"
          value={temporaryStatus}
          onChange={(e) => setTemporaryStatus(e.target.value)}
          className="px-4 py-2 text-lg rounded-xl border border-gray-300 
                     focus:ring-2 focus:ring-blue-400 focus:outline-none
                     transition-colors duration-200 cursor-pointer"
        >
          <option value="Default">Please Select an Option</option>
          <option value="Login">Login</option>
          <option value="Lunch">Lunch</option>
          <option value="End Lunch">End Lunch</option>
          <option value="Logout">Logout</option>
        </select>

        {/* Button */}
        <button
          onClick={onStatusChange}
          className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 
                     rounded-xl shadow-md hover:bg-blue-600 active:bg-blue-700 
                     transition-all duration-200 cursor-pointer"
        >
          Change Status
        </button>
      </div>
    </div>
  );
};

export default ClockingSystem;
