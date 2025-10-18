import React from "react";

const ATSOptimizationTips = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className=" mb-4 text-purple-500">
        ATS Optimization Tips
      </h2>
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div>
          <ul className=" list-inside text-gray-700 space-y-2 list-disc">
            <li>Use standard section headings.</li>
            <li>Include relevant keywords from job descriptions.</li>
            <li>Save in both PDF and Word formats.</li>
            <li>Keep a simple, clean formatting style.</li>
          </ul>
        </div>

      
        <div>
          <ul className=" text-gray-700 space-y-2 list-disc">
            <li>Avoid complex graphics or images.</li>
            <li>Don,t use tables or columns.</li>
            <li>Avoid unusual fonts or formatting.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATSOptimizationTips;