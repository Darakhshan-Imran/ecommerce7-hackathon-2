import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 w-full">
      {/* Top Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-blue-500">MORENT</h2>
            <p className="mt-4 text-sm text-gray-600">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Middle Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-sm">
            {/* About */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">How it works</a></li>
                <li><a href="#" className="hover:underline">Featured</a></li>
                <li><a href="#" className="hover:underline">Partnership</a></li>
                <li><a href="#" className="hover:underline">Business Relation</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Podcast</a></li>
                <li><a href="#" className="hover:underline">Invite a friend</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Socials</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Discord</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <a href="#" className="hover:underline">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

