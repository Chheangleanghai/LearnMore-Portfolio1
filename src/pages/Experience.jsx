import React from "react";
import { Calendar, Code } from "lucide-react";

const experiences = [
  {
    title: "Personal Portfolio Website",
    company: "Personal Project",
    period: "2024 - Present",
    description:
      "Built with React.js + Vite, JavaScript, and TailwindCSS. Fully responsive and deployed on GitHub Pages.",
    technologies: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "GitHub Pages"],
  },
  {
    title: "E-commerce Application",
    company: "Personal Project",
    period: "2024",
    description:
      "JavaScript with TailwindCSS application with CRUD functionality and local storage.",
    technologies: ["JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Local Storage"],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen py-20 ">
      <div className="max-w-7xl mx-auto pe-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Personal projects showcasing my frontend development skills and learning journey.
          </p>
        </div>

        <div className="relative border-l-2 border-purple-400 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 relative group">
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="bg-slate-800/70 p-6 rounded-xl hover:bg-slate-700/70 transition-all duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 mt-2 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/40 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
