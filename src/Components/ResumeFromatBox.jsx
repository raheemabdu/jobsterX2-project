import React, { useState } from "react";

const ResumeFormatBox = () => {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [open, setOpen] = useState(false);

  const countries = [
    "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China"


  ];

  return (
    <div className="bg-white  mx-auto   mt-10 p-6  rounded-2xl shadow-mdp-6 mb-10 relative ">
    
      <h2 className=" text-purple-500 mb-6">Resume Format by Country</h2>
      <p className="mb-5">Choose the target country to preview resume format and localization notes</p>

    
      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
        
    
        <div className="flex-1  relative">
          <label className="block text-sm font-medium mb-2">
            Target Country/Region
          </label>

         
          <div
            className="border border-amber-800 p-2 w-full cursor-pointer bg-white flex justify-between items-center"
            onClick={() => setOpen(!open)}
          >
            <span>{selectedCountry}</span>
            <svg
              className={`w-4 h-4 ${
                open ? "rotate-180" : ""
              }`}
            >
             
            </svg>
          </div>


          {open && (
            <ul className="absolute z-10 mt-1  bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {countries.map((country) => (
                <li
                  key={country}
                  onClick={() => {
                    setSelectedCountry(country);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>

        
        <div className="flex-1  p-4 bg-gray-50">
          <h3 className=" text-gray-800 mb-2">
            Format Guidelines:
          </h3>
          <ul className=" ml-5 text-sm text-gray-700 space-y-1">
            <li>Max Pages: 2</li>
            <li>No Photo Required</li>
            <li>Personal Details: Not Needed</li>
            <li>Date Format: MM/DD/YYYY</li>
          </ul>
        </div>
      </div>

      
      <div className="text-gray-700 mb-30 ">
        <h3 className=" mb-2">
          Cultural Notes for {selectedCountry}:
        </h3>
        <ul className=" list-disc ml-5 text-sm space-y-1">
          <li>No photo required — can be discriminatory.</li>
          <li>Focus on achievements and results.</li>
          <li>Keep it 1-2 pages maximum.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeFormatBox;