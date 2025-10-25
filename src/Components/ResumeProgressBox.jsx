import React from "react";

const ResumeProgressBox = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-7  ">
    
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-3xl font-bold text-[#3A0CA3]">Your Resume Progress</h2>

        <div className="flex gap-3  md:flex-row flex-col">
          <button className="  px-2  border-1  bg-[#3A0CA3]  rounded-lg text-white ">
            Preview Resume
          </button>
          <button className="flex bg-[#3A0CA3] text-white px-4 py-2 rounded-lg  ">
            Generate Resume
          </button>
        </div>
      </div>

      
      <p className="text-gray-600 mb-5">
        Continue all sections to make your resume ATS compatible.
      </p>

      <p className="mb-6 mt-6 text-[#3A0CA3] ">Completion: 85%</p>

    
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div className=" bg-[#3A0CA3] h-3 rounded-full w-[85%]"></div>
      </div>

     
      <div className="flex items-center gap-2">
        <button className="">
          <span className=" text-[#3A0CA3] font-semibold px-2">Personal Info</span>
        </button>

        <button className="">
          <span className=" text-[#3A0CA3] font-semibold md:px-30 px-3">Experience</span>
        </button>

        <button className="">
          <span className="text-[#3A0CA3] font-semibold flex md:px-8 px-3  ">Education</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeProgressBox;