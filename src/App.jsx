import React, { useState } from "react";
import ResumeProgressBox from "../src/Components/ResumeProgressBox";
import ResumeFormatBox from "../src/Components/ResumeFromatBox";
import ResumeDownloadHistory from "../src/Components/ResumeDownloadHistory";
import { FileText } from "lucide-react";
import ATSOptimizationTips from "../src/Components/ATSOptimizationTips";

const App = () => {
  // 
  const [showModal, setShowModal] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!resumeText.trim()) {
      setError("Resume content cannot be empty!");
      return;
    }

    setError("");
    setShowModal(false);
    console.log("Analyzing resume:", resumeText);
  };

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

          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition mt-3 md:mt-0"
          >
            Get Your Resume JD Score
          </button>
        </div>

        <ResumeProgressBox />
        <ResumeFormatBox />
        <ResumeDownloadHistory />
        <ATSOptimizationTips />


        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-[100%] max-w-[800px] relative">
              <h2 className="text-3xl font-bold mb-3 text-gray-800 ">
                Resume JD Score Analysis
              </h2>

              
              <p className="text-gray-600 mb-5  text-sm">
                Get your resume scored against job descriptions and ATS systems.
                Upload your resume to see how well it matches industry
                requirements and get optimization tips.
              </p>
              <h2 className="font-bold text-3xl mb-3">
                Paste Your Resume Content
              </h2>

           
              <textarea
                placeholder="past your current resume here for ai analysis......"
                className="w-full border border-gray-300 p-3 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                rows={6}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              ></textarea>

              
              {error && (
                <p className="text-red-500 text-sm mb-3 text-center">
                  {error}
                </p>
              )}

              
              <div className="text-center">
                <button
                  onClick={handleAnalyze}
                  className="bg-pink-600 text-white px-70 py-2 rounded hover:bg-pink-700 transition"
                >
                  Analyze with AI
                </button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;