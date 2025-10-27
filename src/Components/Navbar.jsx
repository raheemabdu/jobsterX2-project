import React, { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔹 Only the top-right menu button on mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white shadow-md p-2 rounded-md"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-md z-40 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Scrollable Sidebar Content */}
        <div className="h-full overflow-y-auto p-6">
          
          {/* 🔸 Logo Section */}
          <div className="flex items-center gap-2 mb-16">
            <h1 className="text-xl font-semibold text-purple-700">JOBSTER X</h1>
          </div>

          {/* 🔸 Profile Section */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-5"></div>

            <h2 className="font-semibold text-lg">Sameer Saleem</h2>
            <p className="text-sm text-gray-500 mb-4">sameer@jobsterx.com</p>

            {/* Premium + Level */}
            <div className="flex justify-center items-center gap-2 mb-5">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                Premium
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                Level Professional
              </span>
            </div>

            {/* Profile Bar */}
            <div className="w-full text-left text-sm text-gray-600 mb-4">
              <div className="flex justify-between items-center mb-1">
                <span>Profile</span>
                <span className="text-xs font-medium text-gray-700">85%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="h-2 bg-[#7209B7] w-[85%] rounded-full"></div>
              </div>
            </div>

            {/* Next Level Bar */}
            <div className="w-full text-left text-sm text-gray-600">
              <div className="flex justify-between items-center mb-1">
                <span>Next Level</span>
                <span className="text-xs font-medium text-gray-700">Expert</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-[#7209B7] h-2 w-[50%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 🔸 Activity + Menu Section */}
          <div className="mb-16 ">
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-purple-700 ">
                <FileText size={18} />
                Lorem Ipsum
              </li>
              <li className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-purple-700">
                <FileText size={18} />
                Lorem Ipsum
              </li>
              <li className="flex items-center gap-2 bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white font-medium p-3 rounded-md cursor-pointer">
                <FileText size={18} />
                Build your Resume
              </li>
              <li className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-purple-700">
                <FileText size={18} />
                Lorem Ipsum
              </li>
              <li className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-purple-700">
                <FileText size={18} />
                Lorem Ipsum
              </li>
              <li className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-purple-700">
                <FileText size={18} />
                Lorem Ipsum
              </li>
            </ul>
          </div>

          {/* 🔸 Bottom Section */}
          <div className="text-center mb-16">
            <div className=" bg-gradient-to-b from-[#3A0CA3] to-[#7209B7] text-white text-sm px-7 py-4 rounded-md font-medium w-full">
              🔥 Streak 7 days
            </div>
            <p className="text-xs text-gray-500 mt-4">Member since Jan 2024</p>
            <button className="text-red-500 text-xs mt-4 hover:underline">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Overlay on Mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Navbar;