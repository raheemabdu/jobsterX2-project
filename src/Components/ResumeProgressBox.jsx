import React from "react";

const ResumeProgressBox = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
    
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold">Your Resume Progress</h2>

        <div className="flex gap-3">
          <button className="  px-4 py-2 rounded-lg ">
            Preview Resume
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Generate Resume
          </button>
        </div>
      </div>

      
      <p className="text-gray-600 mb-5">
        Continue all sections to make your resume ATS compatible.
      </p>
      <p>Completion: 85%</p>

    
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div className="bg-purple-600 h-3 rounded-full w-[85%]"></div>
      </div>

     
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center justify-between  px-4 py-2 rounded-lg w-[180px]  transition">
          <span className="text-gray-700">Personal Info</span>
        </button>

        <button className="flex items-center justify-between px-4 py-2 rounded-lg w-[180px]  transition">
          <span className="text-gray-700">Experience</span>
        </button>

        <button className="flex items-center justify-between  px-4 py-2 rounded-lg w-[180px]  transition">
          <span className="text-gray-700">Education</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeProgressBox;