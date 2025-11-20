import React from "react";
import { Facebook, Github, Linkedin, Twitter, Send } from "lucide-react";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
 const techStack = [
  { name: "React", icon: <SiReact className="w-6 h-6 text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
  { name: "Vite", icon: <SiVite className="w-6 h-6 text-yellow-400" /> },
];

  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Technology Stack */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Built with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 px-4 py-2 rounded-xl shadow hover:scale-105 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className={`font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com/Chheangleanghai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://web.facebook.com/ye.ak.995692/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            <Facebook className="w-7 h-7" />
          </a>
          <a
  href="https://t.me/Chheang_leanghai" // your Telegram link
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
>
  <Send className="w-7 h-7" />
</a>
          <a
            href="https://www.linkedin.com/in/leanghai-chheang-aa2a1336b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="https://x.com/hai_leang20327"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
          >
            <Twitter className="w-7 h-7" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Leanghai Chheang</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
