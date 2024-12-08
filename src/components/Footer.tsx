import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Brand and Social Icons Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Bandage</h2>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <FaFacebook
              className="text-blue-600 text-xl hover:text-blue-800 cursor-pointer"
              aria-label="Facebook"
            />
            <FaInstagram
              className="text-pink-500 text-xl hover:text-pink-700 cursor-pointer"
              aria-label="Instagram"
            />
            <FaTwitter
              className="text-blue-400 text-xl hover:text-blue-600 cursor-pointer"
              aria-label="Twitter"
            />
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm mb-10">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-blue-500">
                  Career
                </a>
              </li>
              <li>
                <a href="/hiring" className="hover:text-blue-500">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/license" className="hover:text-blue-500">
                  License Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-lg mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="/marketing" className="hover:text-blue-500">
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="/analytics" className="hover:text-blue-500">
                  User Analytics
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-blue-500">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/apps" className="hover:text-blue-500">
                  iOS & Android Apps
                </a>
              </li>
              <li>
                <a href="/demo" className="hover:text-blue-500">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="/customers" className="hover:text-blue-500">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-blue-500">
                  Developer API
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="font-bold text-lg mb-3">Get In Touch</h3>
            <form className="space-y-3">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Subscribe
              </button>
              <p className="text-sm text-gray-500">
                Stay updated with our latest news.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Made with ❤️ by Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
