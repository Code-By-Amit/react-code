import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 w-[95vw] mx-auto ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold text-white">Your Company</h2>
            <p className="text-gray-400 mt-2">
              Providing top-notch services with dedication and integrity.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="text-center sm:text-right mt-6 sm:mt-0">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mt-3">
              <a href="#" className="text-blue-400 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-pink-500 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-blue-700 hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
