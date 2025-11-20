import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Mail, Send } from "lucide-react";
import img from "../../public/image.png";

const Home = () => {
  const roles = ["Web Developer", "Frontend Developer", "Backend Developer"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentRole.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, roles, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Floating background shapes */}
      

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="w-36 h-36 mx-auto mb-8 rounded-full p-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
            <img
              className="object-cover mt-7 rounded-full"
              src={img}
              alt="Leanghai Chheang"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          LEANGHAI CHHEANG
        </h1>

        {/* Typing roles */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Motivated and detail-oriented student with a strong interest in Frontend Development. 
          Skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, jQuery, and React.js, with a passion for building responsive and user-friendly web applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 items-center">
         
          <a
            href="https://github.com/Chheangleanghai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
          >
            <Github className="w-6 h-6" />
          </a>
         <a
         href="https://t.me/Chheang_leanghai"
         target="blank"
          className="py-3 px-5 border-2 flex space-x-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-slate-900 transition-colors duration-300">
            Contact Me:
            <Send className="w-6 h-6" />
         </a>
          <a
            href="mailto:chheangleanghai160@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Home;
