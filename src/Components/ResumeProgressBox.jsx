import React from "react";
import { CheckCircle, Eye, FileText } from "lucide-react";

const ResumeProgressBox = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6  font-[Poppins]">
      {/* Header and top buttons */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <h2 className="text-2xl  font-semibold text-[#3A0CA3]  md:mb-0">
          Your Resume Progress
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#4361EE] hover:bg-[#2749da] text-white rounded-lg  transition-all duration-200">
            <Eye className="w-5 h-5" /> Preview Resume
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] hover:opacity-90 text-white rounded-lg  transition-all duration-200">
            <FileText className="w-5 h-5" /> Generate Resume
          </button>
        </div>
      </div>

      {/* Paragraph */}
      <p className="  text-gray-600 text-xs">
        Complete all sections for best ATS compatibility.
      </p>

      {/* Progress Bar */}
      <p className="mb-3 mt-6 text-[#3A0CA3] ">Completion: 85%</p>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div className="bg-[#3A0CA3] h-3 rounded-full w-[85%]"></div>
      </div>

      {/* Section Buttons with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {[
          "Personal Info",
          "Experience",
          "Education",
          "Projects",
          "Certificates",
          "Skills",
        ].map((section) => (
          <button
            key={section}
            className="flex items-center justify-center gap-2  py-2  transition-all duration-200"
          >
            <CheckCircle className="text-[#3A0CA3] w-5 h-5" />
            <span className="text-[#3A0CA3] ">{section}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResumeProgressBox;