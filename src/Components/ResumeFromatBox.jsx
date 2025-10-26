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
    <div className="bg-white  mx-auto   mt-10 p-6  rounded-2xl shadow-mdp-6 mb-10 relative e ">
    
      <h2 className="  text-[#3A0CA3] text-2xl font-bold ">Resume Format by Country</h2>
      <p className="mb-2 text-gray-600 text-xs">Choose the target country to preview resume format and localization notes</p>

    
      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
        
    
        <div className="flex-1  relative ">
          <label className="block font-medium mb-2">
            Target Country/Region
          </label>

         
          <div
            className="  p-2 w-full cursor-pointer bg-white shadow-md flex justify-between items-center"
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

        
        <div className="flex-1 ">
          <h3 className="  font-bold mb-2 text-gray-600 text-xs">
            Format Guidelines:
          </h3>
          <ul className=" ml-5 text-gray-600 text-xs space-y-1 ">
            <li>Max Pages:2</li>
            <li>No Photo Required: NO</li>
            <li>Personal Details: Not Needed</li>
            <li>Date Format: MM/DD/YYYY</li>
          </ul>
        </div>
      </div>

      
      <div className="">
        <h3 className=" mb-2  text-[#3A0CA3] font-bold ">
          Cultural Notes for {selectedCountry}:
        </h3>
        <ul className=" list-disc ml-5  space-y-1 text-gray-600 text-xs">
          <li>No photo required — can be discriminatory.</li>
          <li>Focus on achievements and results.</li>
          <li>Keep it 1-2 pages maximum.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeFormatBox;