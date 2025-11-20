import React from "react";
import { BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    school: "Royal University of Phnom Penh (RUPP)",
    period: "2024 - Present (Year 2)",
    details: "Currently pursuing my degree in Computer Science and Engineering.",
  },
  {
    degree: "High School Diploma",
    school: "Koh Kong High School",
    period: "2021 - 2023",
    details: "Completed high school education with a focus on science and mathematics.",
  },
  {
    degree: "Frontend Development Certificate",
    school: "ETEC",
    period: "2025",
    details: "Professional certificate in frontend development technologies and practices.",
  },
  {
    degree: "Adobe Photoshop Certificate",
    school: "ETEC",
    period: "2025",
    details: "Certificate in digital design and image editing using Adobe Photoshop.",
  },
  {
    degree: "C++/OOP Certificate",
    school: "ETEC",
    period: "2024",
    details: "Certificate in C++ programming and Object-Oriented Programming concepts.",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen py-20  ">
      <div className="max-w-7xl mx-auto pe-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications that built my foundation.
          </p>
        </div>

        <div className="relative border-l-2 border-purple-400 ml-4 md:ml-12">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 ml-6 relative group">
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-800/70 p-6 rounded-xl hover:bg-slate-700/70 transition-all duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Award className="w-5 h-5 mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{edu.school}</p>
                <p className="text-gray-400 mt-2 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
