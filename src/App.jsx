import React from "react";
import ResumeProgressBox from "../src/Components/ResumeProgressBox";
import ResumeFormatBox from "../src/Components/ResumeFromatBox";
import ResumeDownloadHistory from "../src/Components/ResumeDownloadHistory";
import { FileText } from "lucide-react";
import ATSOptimizationTips from "../src/Components/ATSOptimizationTips";

const App = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-4xl">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-700">
              Resume Builder
            </h1>
            <p className="text-gray-600 mt-1">
              Create ATS-optimized resumes that get you noticed.
            </p>
          </div>

          <button className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition mt-3 md:mt-0">
            Get Your Resume to Score
          </button>

        </div>
        <ResumeProgressBox />
        <ResumeFormatBox />
        <ResumeDownloadHistory/>
        <ATSOptimizationTips/>
      </div>
    </div>
  );
};

export default App;