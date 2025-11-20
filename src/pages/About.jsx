import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen py-20 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Motivated and detail-oriented student passionate about web development and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              My name is <span className="text-purple-400 font-semibold">Leanghai Chheang</span>, 19 years old from Koh Kong Province. I am currently pursuing a <span className="text-purple-400 font-semibold">Bachelor's degree in Computer Science</span> at the Royal University of Phnom Penh.
            </p>
            <p className="leading-relaxed">
              I am a motivated and detail-oriented student with a strong passion for <span className="text-purple-400 font-semibold">web development</span>. I have experience with React.js, APIs, and backend technologies including PHP, Laravel, and SpringBoot, enabling me to build dynamic, responsive, and user-friendly web applications.
            </p>
            <p className="leading-relaxed">
              As a quick learner, I am eager to gain practical experience and grow as a developer. I strive to create <span className="text-purple-400 font-semibold">intuitive user experiences</span> that blend functionality with elegant design.
            </p>
            <p className="leading-relaxed">
              Outside of coding, I enjoy exploring new technologies, working on personal projects, and continuously improving my web development skills.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border-2 border-purple-600 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors duration-200">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">chheangleanghai160@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors duration-200">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">010 248 053</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors duration-200">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Sangkat Samraong Kraom, Potsenchey District, Phnom Penh</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-purple-400 transition-colors duration-200">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Completed internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
