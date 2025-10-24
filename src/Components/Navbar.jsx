import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex ` bg-gray-50 relative">
      
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 z-30 w-full">
        <h1 className="text-lg font-bold text-indigo-700">JOBSTER X</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-100"
        >
          {isOpen ? (
            <X className="w-6 h-6 " />
          ) : (
            <Menu className="w-6 h-6 text-indigo-700" />
          )}
        </button>
      </div>

      
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-5 flex flex-col z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex-1">
        
          <h1 className="text-xl font-bold text-indigo-700 mb-6 hidden md:block">
            JOBSTER X
          </h1>

        
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
            <h2 className="text-sm font-semibold">Sameer Saleem</h2>
            <p className="text-gray-500 text-xs">sameer@jobsterx.com</p>

            <button className="mt-2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Premium
            </button>

            <p className="mt-1 text-xs text-gray-600 font-medium">
              Level Professional
            </p>

           
            



            <div className="w-full mt-2">
              <div className="flex justify-between text-[10px] text-gray-600 mb-1">
                <span>Profile</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-indigo-600 h-1.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>Next</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
       

          

         
          <ul className="space-y-1.5">
            <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer text-sm">
              📄 Lorem Ipsum
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer text-sm">
              📄 Lorem Ipsum
            </li>
            <li className="flex items-center gap-2 bg-indigo-600 text-white p-2 rounded cursor-pointer text-sm">
              📄 Build your Resume
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer text-sm">
              📄 Lorem Ipsum
            </li>
             <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer text-sm">
              📄 Lorem Ipsum
            </li>
             <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer text-sm">
              📄 Lorem Ipsum
            </li>
            
            
          </ul>
        </div>

     
        <div className="mt-6">
          <div className="bg-indigo-600 text-white rounded-lg p-2.5 flex justify-between items-center text-sm">
            <span>🔥 Streak</span>
            <span className="font-semibold">7d</span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1.5">Since Jan 2024</p>
          <p className="text-[10px] text-red-500 mt-0.5 cursor-pointer">↩ Sign Out</p>
        </div>
      </aside>

     
      <main className="flex-1 md:ml-64% p-6 mt-14 md:mt-0  transition-all">
        {children}
      </main>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;