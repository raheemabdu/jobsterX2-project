import React from "react";
import { FileText } from "lucide-react";

const ResumeDownloadHistory = () => {
  const resumes = [
     { id: 1, name: "IT Resume", file: "/resumes/it_resume_1.pdf" },
     { id: 2, name: "IT Resume", file: "/resumes/it_resume_2.pdf" },
    { id: 3, name: "IT Resume", file: "/resumes/it_resume_3.pdf" },
    { id: 4, name: "IT Resume", file: "/resumes/it_resume_4.pdf" },


  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4  text-[#3A0CA3] ">
        Resume Download History
      </h2>
      <p className="  text-gray-600 text-xs">
        Track all your resume downloads with timestamps and formats.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {resumes.map((resume) => (
          <div
            key={resume.id}
            className="flex flex-col items-center justify-center rounded-xl p-6 "
          >
            <FileText className=" text-[#3A0CA3] w-10 h-10 mb-3" />
            <p className=" text-gray-600 text-1xl mb-2 ">{resume.name}</p>

            <a
              href={resume.file}
              download
              className="text-pink-500  text-xs " 
            >
              DOWNLOAD
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeDownloadHistory;