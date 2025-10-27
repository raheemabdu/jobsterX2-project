import React, { useState } from "react";
import { X } from "lucide-react";
import ResumeProgressBox from "./Components/ResumeProgressBox";
import ResumeFormatBox from "./Components/ResumeFromatBox";
import ResumeDownloadHistory from "./Components/ResumeDownloadHistory";
import ATSOptimizationTips from "./Components/ATSOptimizationTips";
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
    <div className="min-h-screen  flex justify-center p-6 w-[75%] md:ml-auto md:mr-7 font-[Poppins] mt-20 ">
      <div className="w-full max-w-5xl">
        {/* -------- HEADER -------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-center mb-5">
          <div>
            <h1 className="text-3xl font-bold text-zinc-700 md:ml-10 ">Resume Builder</h1>
            <p className="text-gray-600 mt-1 md:ml-10">
              Create ATS-optimized resumes that get you noticed.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white px-6 py-2 rounded-xl hover:opacity-90 transition mt-3 mr-12 "
          >
            Get Your Resume to Score
          </button>
        </div>

        {/* -------- COMPONENTS -------- */}
        <ResumeProgressBox />
        <ResumeFormatBox />
        <ResumeDownloadHistory />
        <ATSOptimizationTips />
        <Navbar />
      </div>

      {/* -------- MODAL -------- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 ">
          <div className="bg-white rounded-2xl w-full max-w-3xl md:h-[75vh] h-[80vh] overflow-y-auto relative shadow-2xl p-6 animate-fadeIn">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => {
                setShowModal(false);
                setShowResults(false);
                setResumeText("");
                setError("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* -------- CONTENT -------- */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2 ">
              Resume JD Score Analysis
            </h2>
            <p className="text-gray-600 mb-5  leading-relaxed">
              Get your resume scored against job descriptions and ATS systems.
              Upload your resume to see how well it matches industry standards
              and get professional improvement suggestions.
            </p>

            <h3 className="font-semibold text-2xl  text-gray-800">
              Paste Your Resume Content
            </h3>

            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              className="w-full border border-gray-300 p-3 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              rows={6}
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="sticky bottom-0 bg-white pt-3 pb-2">
              <button
                onClick={handleAnalyze}
                className="w-full md:w-auto bg-[#F72585] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-all duration-200"
              >
                Analyze with AI
              </button>
            </div>

            {/* -------- RESULTS -------- */}
            {showResults && (
              <div className="mt-6 space-y-6 transition-all duration-300">
                {/* Score Box */}
                <div className="flex flex-col sm:flex-row justify-between bg-gray-100 p-5 rounded-xl shadow-sm gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">
                      ATS Compatibility Score
                    </p>
                    <h3 className="text-3xl font-bold text-purple-700">70/100</h3>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Improvement Areas</p>
                    <h3 className="text-3xl font-semibold text-purple-700">4</h3>
                  </div>
                </div>

                {/* Strengths */}
                <div className="bg-white shadow-md p-5 rounded-xl">
                  <h4 className="text-lg text-purple-700 font-semibold mb-3">
                    ✓ Strength Areas
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Strong professional experience section</li>
                    <li>Good use of action-oriented language</li>
                    <li>Clear career progression shown</li>
                  </ul>
                </div>

                {/* Improvements */}
                <div className="bg-white shadow-md p-5 rounded-xl">
                  <h4 className="text-lg text-purple-700 font-semibold mb-3">
                    ⚙️ Improvement Suggestions
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Add quantifiable achievements with specific metrics</li>
                    <li>Include more industry-specific keywords</li>
                    <li>Use action verbs at the beginning of bullet points</li>
                  </ul>
                </div>

                {/* Keywords */}
                <div className="bg-white shadow-md p-5 rounded-xl">
                  <h4 className="text-lg text-purple-700 font-semibold mb-3">
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
                        className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium"
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