import react from "react";

function MriView({setPage, currentPatient}) {

    return (
        <div className="min-h-screen bg-blue-50 p-8 flex-1">
        <div className="flex items-center justify-between mb-6 w-full">
        {/* Left: Greeting */}
        <h1 className="text-3xl text-left">Hello Admin User 👋🏼,</h1>

        {/* Right: Search Bar */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search people..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
        </div>
      </div>
        
        <div className="mx-auto bg-white p-6 rounded-2xl shadow mb-8">
          <h1 className="text-2xl font-bold mb-1 text-left"><span className="text-gray-500">MRI View for Patient -</span> {currentPatient.name}</h1>
          <h2 className="text-sm mb-2 text-light text-left text-slate-500 max-w-[50%]">Doctors notes for the patient, these can be anything from simple notes too important notes about the scan that other doctors might need to know</h2>
          <ul>
          </ul>
         <div className="flex items-center justify-center w-full h-full py-20 my-20 text-gray-400 text-center">
          Placeholder for Scan Editor
        </div>
        </div>
      </div>
    );
}

export default MriView;