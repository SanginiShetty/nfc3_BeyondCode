import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-[#3E8B96] font-bold text-2xl">
              NGO Logo
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-gray-700 hover:text-[#3E8B96] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#3E8B96] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-[#3E8B96] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#donate"
              className="text-gray-700 hover:text-[#3E8B96] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Donate
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#3E8B96] px-3 py-2 rounded-md text-lg font-medium transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#3E8B96] focus:outline-none focus:ring-2 focus:ring-[#3E8B96]">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
