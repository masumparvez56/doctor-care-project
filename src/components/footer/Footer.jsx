import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl py-6 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between footer-container">

        {/* Left Side */}
        <div className="flex items-center">
          <div className="text-xl mr-4">
            <a href="#" className="block text-4xl font-bold text-white mb-4">
              DoctorCare
            </a>
            <p className="text-sm mb-1">&copy; 2025 - DoctorCare.</p>
            <p className="text-sm">All rights reserved.</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaInstagram className="text-2xl"/>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaFacebook className="text-2xl"/>
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            className="text-white hover:text-gray-300 transition"
          >
            <FaTwitter className="text-2xl"/>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;