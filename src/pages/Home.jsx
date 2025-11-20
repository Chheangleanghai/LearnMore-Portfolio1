import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, User, Send } from 'lucide-react';

const Home = () => {
  const roles = ["Web Frontend Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // letter index
  const [roleIndex, setRoleIndex] = useState(0); // which role in array
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
        }
      } else {
        setDisplayedText(currentRole.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length); // loop roles
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, roles, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
            <User className="w-16 h-16 text-purple-400" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          LEANGHAI CHHEANG
        </h1>
        {/* 👇 Typing effect here */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Motivated and detail-oriented student with a strong interest in Frontend Development. 
          Skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, jQuery and React.js with a passion for building responsive and user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a 
            href="https://github.com/Chheangleanghai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          {/* Telegram */}
          <a 
            href="https://t.me/Chheang_leanghai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Send className="w-6 h-6" />
          </a>
          {/* Email */}
          <a 
            href="mailto:chheangleanghai160@gmail.com" 
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Home;
