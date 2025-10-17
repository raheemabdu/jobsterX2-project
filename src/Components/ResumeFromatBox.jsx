import React, { useState } from "react";

const ResumeFormatBox = () => {
  const [country, setCountry] = useState("United States");

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 ">
      
      <h2 className="text-purple-400 font-bold ">Resume Format by Country</h2>
      <p className="text-gray-400 mb-4">
        Choose the target country to preview resume format and localization notes
      </p>

      <div className="flex md:flex-row flex-col items-start gap-6 ">
       
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-bold ">
            Target Country/Region
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-50 mt-3 "
          >
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Pakistan</option>
            <option>India</option>
          </select>
        </div>

        <div className="flex-1 p-2 bg-gray-100 mt-3">
          <h3 className="font-semibold text-gray-800 ">Format Guidelines:</h3>
          <ul className="  text-sm text-gray-700 space-y-1">
            <li>Max Pages: 2</li>
            <li>No Photo Required</li>
            <li>Personal Details: Not Needed</li>
            <li>Date Format: MM/DD/YYYY</li>
          </ul>
        </div>
      </div>

      <div className="text-gray-700 ">
        <h3 className="text-zinc-950">
          Cultural Notes for {country}:
        </h3>
        <ul className="list-disc ml-5 text-sm space-y-1  ">
          <li>No photo required — can be discriminatory.</li>
          <li>Focus on achievements and quantifiable results.</li>
          <li>Keep it 1-2 pages maximum.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeFormatBox;