import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#738C79] text-white py-12">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4">TechSquare</div>

          {/* Description */}
          <p className="text-gray-200 text-sm">
            TechSquare is a software company, we develop custom-built software for clients - covering everything from financial institutions & medical companies all the way to tech companies and government organizations.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-1/2">
          {/* Social Icons */}
          <div className="flex justify-end space-x-4 mb-8">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-end space-x-6 text-sm">
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Project</li>
            <li className="cursor-pointer hover:underline">Service</li>
            <li className="cursor-pointer hover:underline">Client</li>
            <li className="cursor-pointer hover:underline">Team</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[80%] mx-auto mt-12">
        <hr className="border-gray-500 mb-6" />

        <div className="flex justify-between text-sm">
          {/* Left */}
          <p>Copyright © 2025 TechSquare Software company. All rights reserved.</p>

          {/* Right */}
          <div className="flex items-center space-x-2">
            <span className="cursor-pointer hover:underline">Terms of Use</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
