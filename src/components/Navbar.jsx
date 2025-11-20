import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Star, Briefcase, GraduationCap } from "lucide-react";
import logo from '../assets/logo.png'

const navItems = [
  { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { path: "/about", label: "About", icon: <User className="w-4 h-4" /> },
  { path: "/skills", label: "Skills", icon: <Star className="w-4 h-4" /> },
  { path: "/experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { path: "/education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
];

const Navbar = ({ currentPath, isScrolled }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center ">
            <img className="md:w-11 sm:w-10 w-8 " src={logo} alt="logo" /> <span className="md:text-2xl sm:text-xl text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ernMore</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                  currentPath === item.path
                    ? "bg-purple-500/20 text-purple-400"
                    : "text-gray-300"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
