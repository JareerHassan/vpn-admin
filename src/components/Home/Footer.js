import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Top Menu */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-5 md:gap-40 p-5 ">
        {/* Menu Links */}
        <div className="flex flex-wrap gap-10 justify-center md:justify-start font-medium text-gray-300">
          {["Resources", "Documentation", "Developers", "Portfolio"].map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <p>{item}</p>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-10 font-medium text-gray-300">
          {/* Phone */}
          <div className="relative group cursor-pointer">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> + 123 (456) 789 99
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </div>

          {/* Email */}
          <div className="relative group cursor-pointer">
            <p className="flex items-center gap-2">
              <FaEnvelope /> leroux@example.com
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </div>

      {/* Spacer Row (can be kept or removed if unused) */}
      <div className="flex flex-col md:flex-row justify-around gap-10 p-5 text-white bg-[#0d1c23]"></div>

      {/* Footer Main Section */}
      <footer className="bg-[#0d1c23] text-gray-300 p-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center ">
          {/* First Section */}
          <div className="flex-1">
            <img
              src="https://leroux.qodeinteractive.com/wp-content/uploads/2023/01/logo-footer.png"
              alt="Leroux Logo"
              className="w-44 mb-3"
            />
            <p className="text-[#85979b] mb-6">
              Make your idea into reality with Leroux
            </p>

            <div className="relative w-full max-w-xs mt-5">
              <input
                type="email"
                placeholder="Your e-mail"
                required
                className="w-full bg-transparent text-white placeholder-white outline-none pb-3"
              />
              <div className="w-full h-[1px] bg-white"></div>
              <div className="absolute right-0 -top-2">
                <button className="flex items-center font-medium bg-white/20 text-white px-4 py-1.5 rounded-full hover:bg-white/30 transition text-sm">
                  Send <FaArrowUp size={14} className="rotate-45 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex-1 ">
            <h4 className="text-xl font-semibold mb-4 leading-relaxed p-1">
              Professional & modern, a theme designed to help your
              <br className="hidden md:block" />
              business stand out from the rest.
            </h4>

            <div className="flex flex-col md:flex-row gap-20 p-1 ">
              {/* Contact Us */}
              <div className="mb-6">
                <p className="font-medium text-[#85979B] mb-2">Contact us:</p>
                <div className="font-medium space-y-2">
                  <div className="relative group cursor-pointer">
                    <p className="flex items-center gap-2">
                      <FaPhoneAlt /> + 123 (456) 789 99
                    </p>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                  <div className="relative group cursor-pointer">
                    <p className="flex items-center gap-2">
                      <FaEnvelope /> leroux@example.com
                    </p>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="font-medium text-[#85979B] mb-2">Our address:</p>
                <div className="font-medium space-y-2">
                  {["Old Westbury 256,", "New York 11201,", "United States"].map((line, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <p className="flex items-center gap-2">{line}</p>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-medium text-[#85979B] mb-2">Our social:</p>
                <div className="flex gap-4 text-lg">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Leroux Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
