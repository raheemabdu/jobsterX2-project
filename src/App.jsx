import React, { useState } from "react";
import ResumeProgressBox from "./Components/ResumeProgressBox";
import ResumeFormatBox from "./Components/ResumeFromatBox";
import ResumeDownloadHistory from "./Components/ResumeDownloadHistory";
import ATSOptimizationTips from "./Components/ATSOptimizationTips";
// import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    if (!resumeText.trim()) {
      setError("⚠️ Resume content cannot be empty!");
      return;
    }

    setError("");
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6 w-[75%] ml-auto mr-15 ">
      <div className="w-full max-w-4xl">
       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-zinc-700 mt-15 ">Resume Builder</h1>
            <p className="text-gray-600 mt-1">
              Create ATS-optimized resumes that get you noticed.
            </p>
          </div>

          
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white px-5 py-2 rounded-xl hover:bg-purple-700 transition mt-3 md:mt-15"
          >
            Get Your Resume to Score
          </button>
        </div>

       
        <ResumeProgressBox />
        <ResumeFormatBox />
        <ResumeDownloadHistory />
        <ATSOptimizationTips />
        {/* <Dashboard/> */}
        <Navbar/>
      </div>

    
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 ">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl md:h-[80vh]  overflow-y-auto relative">
           
            <button
              onClick={() => {
                setShowModal(false);
                setShowResults(false);
                setResumeText("");
                setError("");
              }}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              
            </button>

         
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Resume JD Score Analysis
            </h2>
            
            <p className="text-gray-600 mb-4">
              Get your resume scored against job descriptions and ATS systems.
              Upload your resume to see how well it matches industry
              requirements and get optimization tips.
            </p>
            <h2 className="font-semibold mb-3 text-2xl">
              Paste Your Resume Content  
            </h2>

           
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-black-500"
              rows={6}
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            
            <div className="sticky bottom-0 bg-white pt-3 pb-2">
              <button
                onClick={handleAnalyze}
                className=" bg-pink-500 text-white px-6 md:px-73 py-2 rounded-lg hover:bg-pink-600"
              >
                Analyze with AI
              </button>
            </div>

           
            {showResults && (
              <div className="mt-4 space-y-5">
                
                <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div>
                    <p className="text-gray-600 text-sm">
                      ATS Compatibility Score
                    </p>
                    <h3 className="text-3xl font-bold text-purple-700">
                      70/100
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Improvement Areas</p>
                    <h3 className="text-3xl font-semibold text-purple-700">4</h3>
                  </div>
                </div>

                
                <div className="bg-white shadow-md mb-4 mt-6">
                  <h4 className="text-lg  text-purple-700 mb-2">
                    ✓ Strength Areas
                  </h4>
                  <ul className="list-disc ml-5 text-gray-700 ">
                    <li>Strong professional experience section</li>
                    <li>Good use of action-oriented language</li>
                    <li>Clear career progression shown</li>
                  </ul>
                </div>

              
                <div className="bg-white shadow-md mb-6 mt-6">
                  <h4 className="text-lg   text-purple-700 mb-2">
                    ⚙️ Improvement Suggestions
                  </h4>
                  <ul className="list-disc ml-5 text-gray-700" >
                    <li>
                      Add quantifiable achievements with specific metrics
                    </li>
                    <li>Include more industry-specific keywords</li>
                    <li>
                      Use action verbs at the beginning of bullet points
                    </li>
                    
                  </ul>
                </div>

            
                <div className="bg-white shadow-md mb-6 mt-6">
                  <h4 className="text-lg text-purple-700 mb-1 mt-3">
                    🔑 Recommended Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Project Management",
                      "Team Leadership",
                      "Communication",
                      "Problem Solving",
                      
                    ].map((keyword, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-6 mt-6"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;