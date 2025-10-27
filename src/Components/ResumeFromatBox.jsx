import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ResumeFormatBox = () => {
  const [selectedCountry, setSelectedCountry] = useState("United States of America");
  const [open, setOpen] = useState(false);

  const countries = [
    "Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
    "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China"
  ];

  return (
    <div className="bg-white max-w-5xl mx-auto mt-10 p-6 rounded-2xl shadow-md mb-10">
      
      {/* 🔹 Title + Description */}
      <h2 className="text-[#3A0CA3] text-2xl font-bold">
        Resume Format by Country
      </h2>
      <p className="text-gray-600 text-xs mt-2 mb-8">
        Choose the target country to preview resume format and localization notes
      </p>

      {/* 🔹 Main Section (Country Select + Guidelines) */}
      <div className="flex flex-col md:flex-row items-start md:items-start gap-8 mb-8">
        
        {/* 🔸 Dropdown */}
        <div className="flex-1 relative w-full">
          <label className="block font-medium mb-2 text-sm">
            Target Country/Region
          </label>

          {/* Dropdown button */}
          <div
            onClick={() => setOpen(!open)}
            className="p-3 w-full cursor-pointer border border-gray-300 bg-white rounded-lg shadow-sm flex justify-between items-center"
          >
            <span className="text-sm text-gray-700">{selectedCountry}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown list */}
          {open && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto text-sm">
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

        {/* 🔸 Format Guidelines — aligned to top */}
        <div className="flex-1 mt-[29px] md:mt-0">
          <h3 className="font-semibold  text-gray-700 text-sm ">
            Format Guidelines:
          </h3>
          <ul className="ml-5 text-gray-600 text-xs space-y-1 list-disc mt-2 ">
            <li>Max Pages: 2</li>
            <li>No Photo Required: No</li>
            <li>Personal Details: Not Needed</li>
            <li>Date Format: MM/DD/YYYY</li>
          </ul>
        </div>
      </div>

      {/* 🔹 Cultural Notes Section — thicker border */}
      <div className="border border-gray-300 rounded-xl p-5 ">
        <h3 className="text-[#3A0CA3] font-bold mb-3 text-sm">
          Cultural Notes for {selectedCountry}:
        </h3>
        <ul className="list-disc ml-5 space-y-1 text-gray-600 text-xs">
          <li>No photo required — can be discriminatory.</li>
          <li>Focus on achievements and results.</li>
          <li>Keep it 1–2 pages maximum.</li>
          <li>Use clear, concise, and professional language.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeFormatBox;