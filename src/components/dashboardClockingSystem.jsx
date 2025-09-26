const ClockingSystem = ({
  onStatusChange,
  temporaryStatus,
  setTemporaryStatus,
  temporaryShiftStat,
  setTemporaryShiftStat,
  isShiftLocked
}) => {
  const date = new Date();

  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const currentDate = date.getDate();
  const year = date.getFullYear();

  const today = `${dayOfWeek}, ${month} ${currentDate}, ${year}`;

  // Wrap your status change in form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    onStatusChange();   // call your parent handler
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-5">
      {/* Greeting */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">👋 Welcome, User!</h2>
        <p className="text-gray-500 mt-2">{today}</p>
      </div>

      {/* Controls inside a form */}
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-6 w-full md:w-auto"
      >
        {/* Shift Type */}
        <div className="flex flex-col w-full sm:w-48">
          <label
            htmlFor="worktype"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Shift Type
          </label>
          <select
            id="worktype"
            name="worktype"
            value={temporaryShiftStat}
            onChange={(e) => setTemporaryShiftStat(e.target.value)}
            disabled={isShiftLocked}
            required
            className="px-4 py-2 text-lg rounded-xl border border-gray-300
                       focus:ring-2 focus:ring-blue-400 focus:outline-none
                       disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
                       transition-colors duration-200 cursor-pointer"
          >
            <option value="">Select shift</option>
            <option value="WFH">WFH</option>
            <option value="RTO">RTO</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col w-full sm:w-56">
          <label
            htmlFor="status"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={temporaryStatus}
            onChange={(e) => setTemporaryStatus(e.target.value)}
            required
            className="px-4 py-2 text-lg rounded-xl border border-gray-300
                       focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition-colors duration-200 cursor-pointer"
          >
            <option value="">Please select</option>
            <option value="Clocked-in">Clocked-in</option>
            <option value="Lunch">Lunch</option>
            <option value="End Lunch">End Lunch</option>
            <option value="Clocked-out">Clocked-out</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="px-6 py-2 text-lg font-semibold text-white bg-blue-500
                       rounded-xl shadow-md hover:bg-blue-600 active:bg-blue-700
                       transition-all duration-200 cursor-pointer"
          >
            Change Status
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClockingSystem;
