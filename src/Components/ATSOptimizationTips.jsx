import React from "react";

const ATSOptimizationTips = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        ATS Optimization Tips
      </h2>
      <p className="text-gray-500 mb-6">
        Make sure your resume passes Applicant Tracking Systems efficiently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Do's */}
        <div>
          <h3 className="text-[#3A0CA3] font-semibold text-lg mb-3">✔ Do’s</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use standard section headings.</li>
            <li>Include relevant keywords from job descriptions.</li>
            <li>Save in both PDF and Word formats.</li>
            <li>Keep a simple, clean formatting style.</li>
          </ul>
        </div>

        {/* ❌ Don’ts */}
        <div>
          <h3 className="text-[#3A0CA3] font-bold text-lg mb-3">✖ Don’ts</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Avoid complex graphics or images.</li>
            <li>Don’t use tables or columns.</li>
            <li>Avoid unusual fonts or formatting.</li>
            <li>Don’t include personal photos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATSOptimizationTips;