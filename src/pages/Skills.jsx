import React from "react";
import { Code, Palette, Smartphone, Database } from "lucide-react";
import { motion } from "framer-motion";
import { SiBootstrap, SiCss3, SiGit, SiHtml5, SiJavascript, SiJquery, SiLaravel, SiLibreoffice, SiMediafire, SiMicrobit, SiMicroeditor, SiOnlyoffice, SiReact, SiSoftpedia, SiSpring, SiTailwindcss, SiWordpress } from "react-icons/si";


const skills = [
  { name: 'HTML5', level: 95, icon: <SiHtml5 className="w-6 h-6 text-orange-500" />, color: 'from-orange-400 to-orange-600' },
  { name: 'CSS3', level: 88, icon: <SiCss3 className="w-6 h-6 text-blue-500" />, color: 'from-blue-400 to-blue-600' },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" />, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Bootstrap', level: 82, icon: <SiBootstrap className="w-6 h-6 text-purple-500" />, color: 'from-purple-400 to-purple-600' },
  { name: 'JavaScript (ES6+)', level: 80, icon: <SiJavascript className="w-6 h-6 text-yellow-500" />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React.JS', level: 75, icon: <SiReact className="w-6 h-6 text-blue-600" />, color: 'from-blue-500 to-blue-700' },
  { name: 'jQuery', level: 70, icon: <SiJquery className="w-6 h-6 text-blue-400" />, color: 'from-blue-300 to-blue-500' },
  { name: 'Git & GitHub', level: 75, icon: <SiGit className="w-6 h-6 text-orange-600" />, color: 'from-orange-500 to-orange-700' },
  { name: 'Responsive Design', level: 85, icon: <SiMediafire className="w-6 h-6 text-pink-500" />, color: 'from-pink-400 to-pink-600' },
  { name: 'PHP & Laravel', level: 60, icon: <SiLaravel className="w-6 h-6 text-red-500" />, color: 'from-red-400 to-red-600' },
  { name: 'Java & SpringBoot', level: 60, icon: <SiSpring className="w-6 h-6 text-green-500" />, color: 'from-green-400 to-green-600' },
  { name: 'Microsoft Office', level: 50, icon: <SiOnlyoffice className="w-6 h-6 text-blue-700" />, color: 'from-blue-600 to-blue-800' },
  { name: 'Problem Solving', level: 80, icon: <SiSoftpedia className="w-6 h-6 text-purple-600" />, color: 'from-purple-500 to-purple-700' },
];

const Skills = () => {
  return (
    <section className="min-h-screen py-20">
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
            <motion.div 
              key={skill.name} 
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 shadow-lg group"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-lg">{skill.name}</span>
                </div>
                <span className=" font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
