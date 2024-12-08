'use client';

import React, { useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaSearch, FaHeart } from "react-icons/fa";

const Navbar: React.FC = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4">
          {/* Contact Information */}
          <div className="flex flex-wrap justify-between sm:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
            <span className="block sm:inline">📞 (225) 555-0118</span>
            <span className="block sm:inline">✉️ michelle.rivera@example.com</span>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <span className="w-full sm:w-auto text-center sm:text-left">Follow Us and get a chance to win 80% off</span>
            <div className="flex gap-2 text-normal justify-center sm:justify-start">
              <p className="hidden sm:inline">Follow Us:</p>
              <div className="flex gap-2">
                <FaInstagram aria-label="Instagram" />
                <FaYoutube aria-label="YouTube" />
                <FaFacebook aria-label="Facebook" />
                <FaTwitter aria-label="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm relative">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            <Link href="/" aria-label="Home">Bandage</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu state
            className="text-gray-700 text-2xl md:hidden"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="navbar-menu"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Navigation Links */}
          <nav
            id="navbar-menu"
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex gap-6 text-gray-700 z-50 transition-all ease-in-out duration-300`}
          >
            <Link href="/" className="block py-2 px-4 hover:text-blue-500" aria-label="Home">
              Home
            </Link>
            <Link href="/shop" className="block py-2 px-4 hover:text-blue-500" aria-label="Shop">
              Shop
            </Link>
            <Link href="/about" className="block py-2 px-4 hover:text-blue-500" aria-label="About Us">
              About
            </Link>
            <Link href="#" className="block py-2 px-4 hover:text-blue-500" aria-label="Blog">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 px-4 hover:text-blue-500" aria-label="Contact">
              Contact
            </Link>
            <Link href="/" className="block py-2 px-4 hover:text-blue-500" aria-label="Pages">
              Pages
            </Link>
          </nav>

          {/* Utility Icons */}
          <div className="hidden md:flex items-center justify-center gap-4 text-blue-500">
            <Link href="/login" className="flex items-center justify-center gap-1" aria-label="Login/Register">
              Login / Register
            </Link>
            <span className="cursor-pointer" aria-label="Search">
              <FaSearch className="text-xl" />
            </span>
            <span className="cursor-pointer" aria-label="Shopping Cart">
              <CiShoppingCart className="text-xl" />
            </span>
            <span className="cursor-pointer" aria-label="Favorites">
              <FaHeart className="text-xl" />
            </span>
          </div>

          {/* Mobile Utility Icons */}
          <div className="md:hidden flex items-center gap-4 text-blue-500">
            <span className="cursor-pointer" aria-label="Search">
              <FaSearch className="text-xl" />
            </span>
            <span className="cursor-pointer" aria-label="Shopping Cart">
              <CiShoppingCart className="text-xl" /> 1
            </span>
            <span className="cursor-pointer" aria-label="Favorites">
              <FaHeart className="text-xl" /> 1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
