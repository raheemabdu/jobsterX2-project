import React from "react";

const ATSOptimizationTips = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-4">
      <h2 className=" mb-4  text-[#3A0CA3] font-bold text-2xl">
        ATS Optimization Tips
      </h2>
      <p className="text-gray-600 text-xs mb-10">Make sure resume passes Applicant Tracking Systems </p>
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div>
          <ul className=" list-inside space-y-2 list-disc text-gray-600 text-xs">
            <li>Use standard section headings.</li>
            <li>Include relevant keywords from job descriptions.</li>
            <li>Save in both PDF and Word formats.</li>
            <li>Keep a simple, clean formatting style.</li>
          </ul>
        </div>

      
        <div>
          <ul className="  space-y-2 list-disc text-gray-600 text-xs">
            <li>Avoid complex graphics or images.</li>
            <li>Don,t use tables or columns.</li>
            <li>Avoid unusual fonts or formatting.</li>
             <li>Keep a simple, clean formatting style.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATSOptimizationTips;