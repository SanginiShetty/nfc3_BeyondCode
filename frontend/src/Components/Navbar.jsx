import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      setMessage("Experiencing high traffic, please wait a moment.");
      
      // Simulate a delay before enabling the button again
      setTimeout(() => {
        setIsButtonDisabled(false);
        setMessage(""); // Clear the message after the button is re-enabled
      }, 3000); // Example: Re-enable after 3 seconds
    }
  };

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#3E8B96]">
          <Link to="/">Health<span className="text-red-500">+</span></Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <Link to="/" className="hover:text-[#3E8B96] transition duration-300">Home</Link>
          </li>
          <li>
            <a href="#services" className="hover:text-[#3E8B96] transition duration-300">Services</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#3E8B96] transition duration-300">About</a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-[#3E8B96] transition duration-300">Reviews</a>
          </li>
          <li>
            <a href="#doctors" className="hover:text-[#3E8B96] transition duration-300">Doctors</a>
          </li>
        </ul>

        {/* Live Chat Button */}
        <div className="relative">
          <button
            className={`bg-[#3E8B96] text-white px-4 py-2 rounded-md hover:bg-[#34717f] transition duration-300 ${
              isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            type="button"
            disabled={isButtonDisabled}
            onClick={handleChatBtnClick}
          >
            <FontAwesomeIcon icon={faCommentDots} /> Live Chat
          </button>
          {message && (
            <p className="text-sm text-red-500 mt-2">
              {message}
            </p>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="text-gray-700 text-2xl cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white p-8 transition-transform transform ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={openNav}
            className="text-gray-700 text-2xl cursor-pointer"
          />
        </div>
        <ul className="mt-8 space-y-6 text-gray-700 text-lg">
          <li>
            <Link onClick={openNav} to="/" className="hover:text-[#3E8B96] transition duration-300">Home</Link>
          </li>
          <li>
            <a onClick={openNav} href="#services" className="hover:text-[#3E8B96] transition duration-300">Services</a>
          </li>
          <li>
            <a onClick={openNav} href="#about" className="hover:text-[#3E8B96] transition duration-300">About</a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews" className="hover:text-[#3E8B96] transition duration-300">Reviews</a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors" className="hover:text-[#3E8B96] transition duration-300">Doctors</a>
          </li>
          <li>
            <a onClick={openNav} href="#contact" className="hover:text-[#3E8B96] transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
