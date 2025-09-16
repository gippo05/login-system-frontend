

const ClockingSystem = () => { 

    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const currentDate = date.getDate();
    const year = date.getFullYear();

    const today = dayOfWeek + ", " + month + " " + currentDate + ", " + year;




    return (
        <>
     <div className="w-full h-48 bg-[#f5f5f5] flex items-center justify-between px-6 shadow-md rounded-2xl">
  <h2 className="text-4xl font-semibold">Welcome, User!</h2>

  {/* Right side container */}
  <div className="flex flex-col items-end">
    <h3 className="text-2xl">{today}</h3>

    {/* Group select + button side by side */}
    <div className="flex items-center gap-4 mt-6">
      <select name="worktype" id="worktype" className="border-2 border-gray-300 rounded-xl p-2 text-lg cursor-pointer hover:border-blue-500 focus:outline-none">
        <option value="WFH">WFH</option>
        <option value="RTO">RTO</option>
      </select>
      <select
        name="status"
        id="status"
        className="border-2 border-gray-300 rounded-xl p-2 text-lg cursor-pointer hover:border-blue-500 focus:outline-none"
      >
        <option value="Login">Login</option>
        <option value="Lunch">Lunch</option>
        <option value="End Lunch">End-Lunch</option>
        <option value="Logout">Logout</option>
      </select>

      <button className="border-2 border-blue-500 rounded-2xl p-2 px-10 bg-blue-500 text-white font-bold hover:bg-[#f5f5f5] hover:text-black cursor-pointer text-2xl">
        Change Status
      </button>
    </div>
  </div>
</div>


        
        </>
    )

}

export default ClockingSystem;