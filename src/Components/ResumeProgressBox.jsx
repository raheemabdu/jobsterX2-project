import React from "react";

const ResumeProgressBox = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-7">
      {/* Header and buttons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
        <h2 className="text-3xl font-bold text-[#3A0CA3] mb-3 md:mb-0">
          Your Resume Progress
        </h2>

        <div className="flex flex-col md:flex-row gap-3">
          <button className="px-2 py-2 bg-[#3A0CA3] text-white rounded-lg">
            Preview Resume
          </button>
          <button className="px-4 py-2 bg-[#3A0CA3] text-white rounded-lg">
            Generate Resume
          </button>
        </div>
      </div>

      {/* Paragraph - below buttons only on small screens */}
      <p className="text-gray-600 mb-5 md:mb-5 md:order-none order-last md:block">
        Continue all sections to make your resume ATS compatible.
      </p>

      {/* Progress bar */}
      <p className="mb-6 mt-6 text-[#3A0CA3]">Completion: 85%</p>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div className="bg-[#3A0CA3] h-3 rounded-full w-[85%]"></div>
      </div>

      {/* Buttons for sections */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-3 text-center">
        <button>
          <span className="text-[#3A0CA3] font-semibold px-2">Personal Info</span>
        </button>

        <button>
          <span className="text-[#3A0CA3] font-semibold px-3">Experience</span>
        </button>

        {/* Education will go below and centered in mobile */}
        <button className="md:inline-block">
          <span className="text-[#3A0CA3] font-semibold px-3">Education</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeProgressBox;