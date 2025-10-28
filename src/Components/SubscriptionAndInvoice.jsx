import React from "react";
import { CheckCircle } from "lucide-react";

const SubscriptionAndInvoice = () => {
  return (
    <div className="mt-3 space-y-10 text-gray-800 font-[Poppins]">
      {/* 🔹 Page Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Subscription & Invoice
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your subscription and view billing history
        </p>
      </div>

      {/* 🔹 Current Plan Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8 border border-gray-100">
        {/* Section Heading */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Current Plan</h2>
            <p className="text-sm text-gray-500 mt-1">
              Your active subscription details
            </p>
          </div>

          {/* 🔸 Active Button */}
          <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            Active
          </span>
        </div>

        {/* 🔹 3 Boxes Row */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Plan Box */}
          <div className="bg-purple-50 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500">Plan</p>
              <h3 className="text-xl font-semibold text-purple-700 mt-1">
                Professional
              </h3>
            </div>
          </div>

          {/* Price Box */}
          <div className="bg-purple-50 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <h3 className="text-xl font-semibold text-purple-700 mt-1">
                $29.99 <span className="text-sm text-gray-500">/ month</span>
              </h3>
            </div>
          </div>

          {/* Next Billing Box */}
          <div className="bg-purple-50 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500">Next Billing</p>
              <h3 className="text-xl font-semibold text-purple-700 mt-1">
                March 15, 2024
              </h3>
            </div>
          </div>
        </div>

        {/* 🔹 Plan Features Heading */}
        <div className="flex justify-between items-center mt-4 border-t border-black-100 pt-4">
          <h3 className="text-lg font-bold text-gray-800">Plan Features</h3>
        </div>

        {/* 🔹 Features Grid */}
        <div className="grid md:grid-cols-2 gap-3 text-gray-700 mt-2">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Unlimited job applications</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Resume builder with AI assistance</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Mock interview sessions</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Career counselling access</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Priority supports</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-purple-600" />
            <p>Analytics dashboard</p>
          </div>
            <div className="flex justify-between items-center mt-4 border-t border-black-100 pt-4 md:w-236"></div>
        </div> 

        {/* 🔹 Cancel Subscription */}
        <div className="text-center mt-4">
          <p className="text-sm text-pink-600 font-medium cursor-pointer">
            Cancel Subscription
          </p>
        </div>
      </div>

      {/* 🔹 Payment Method */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3 text-gray-800">
          Payment Method
        </h2>
        <p className="text-gray-500 mb-5 text-sm">
          Your current payment method used for billing
        </p>

        <div className="flex justify-between items-center bg-purple-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-2 rounded-lg font-semibold text-purple-700 shadow-sm">
              Visa
            </div>
            <span className="text-gray-700 tracking-wider">* * ** 4242</span>
          </div>
          <button className="text-sm text-white bg-[#F72585] px-5 py-2 rounded-lg shadow-md">
            Update
          </button>
        </div>
      </div>

      {/* 🔹 Invoice History */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">Invoice History</h2>
        <p className="text-gray-500 text-sm mb-5">
          View and download your past invoices
        </p>

        <div className="space-y-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-purple-50 hover:bg-purple-100 transition rounded-xl p-4"
              >
                <div>
                  <p className="text-gray-800 font-medium">
                    INV-2024-00{i + 1}
                  </p>
                  <p className="text-sm text-gray-500">
                    Professional Plan – Monthly
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">$29.99</p>
                    <p className="text-xs text-gray-500">Feb 15, 2024</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#F72585"
                    className="w-5 h-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndInvoice;