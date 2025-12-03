import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-15 xl:px-20 pt-10 w-full mt- bg-linear-to-b from-black/20 via-transparent text-gray-500 bg-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-10 border-b border-gray-500/30 pb-8">
        
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-5">
          <img
            src="/logo.png"
            alt="logo"
            className="w-32 sm:w-36 md:w-40 h-auto object-contain"
          />
          <p className="text-sm leading-relaxed max-w-xs sm:pt-12 sm:max-w-sm md:max-w-md">
            WellWisher Group has proudly stood tall as a leader in Mumbai, Navi Mumbai, and Pune’s real estate development sector for over 15 years.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row flex-1 items-start justify-center gap-6 sm:gap-12 md:gap-20 mt-6 md:mt-0 text-center md:text-left">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-3 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-800 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">New Cars</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-0">
            <h2 className="font-semibold mb-3 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-5 text-center text-xs sm:text-sm pb-5">
        Copyright 2025 ©. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
