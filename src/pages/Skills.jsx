import React from "react";
import { Code, Palette, Smartphone, Database } from "lucide-react";

const skills = [
  { name: 'HTML5', level: 95, icon: <Code className="w-6 h-6" />, color: 'bg-orange-500' },
  { name: 'CSS3', level: 88, icon: <Palette className="w-6 h-6" />, color: 'bg-blue-500' },
  { name: 'Tailwind CSS', level: 85, icon: <Palette className="w-6 h-6" />, color: 'bg-cyan-500' },
  { name: 'Bootstrap', level: 82, icon: <Palette className="w-6 h-6" />, color: 'bg-purple-500' },
  { name: 'JavaScript (ES6+)', level: 80, icon: <Code className="w-6 h-6" />, color: 'bg-yellow-500' },
  { name: 'React.js', level: 75, icon: <Code className="w-6 h-6" />, color: 'bg-blue-600' },
  { name: 'jQuery', level: 70, icon: <Code className="w-6 h-6" />, color: 'bg-blue-400' },
  { name: 'Git & GitHub', level: 75, icon: <Code className="w-6 h-6" />, color: 'bg-gray-600' },
  { name: 'Responsive Design', level: 85, icon: <Smartphone className="w-6 h-6" />, color: 'bg-green-500' },
  { name: 'PHP & Laravel', level: 60, icon: <Database className="w-6 h-6" />, color: 'bg-red-500' },
  { name: 'Microsoft Office', level: 90, icon: <Code className="w-6 h-6" />, color: 'bg-blue-700' },
  { name: 'Problem Solving', level: 88, icon: <Code className="w-6 h-6" />, color: 'bg-purple-600' },
];

const Skills = () => {
  return (
    <section className="min-h-screen py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
                <span className="text-gray-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
