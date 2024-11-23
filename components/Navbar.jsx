import { useState } from "react";
import Link from "next/link";
import default_image from "../assets/User-Avatar-Profile-Background-PNG-Clip-Art-Image.png";
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock user data for demonstration
  const user = null; // Set to `{ name: "Parth Joshi" }` to simulate logged-in user

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">PJ Tech Hub</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-500 transition">
            Services
          </Link>
          <div className="relative group">
            <button className="hover:text-blue-500 transition">
              More <span>&#9662;</span>
            </button>
            <div className="absolute left-0 hidden w-40 bg-gray-200 dark:bg-gray-800 dark:text-white group-hover:flex flex-col z-50 shadow-md rounded">
              <Link
                href="/portfolio"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-t"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white "
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-b"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
          <SearchBar />
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md focus:outline-none hover:scale-105 transition-transform duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {user ? (
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  {user.name[0].toUpperCase()}
                </span>
              ) : (
                <Image
                  src={default_image}
                  alt="Default Avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                {user ? (
                  <>
                    <p className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                      Hello, {user.name}
                    </p>
                    <hr className="border-gray-300 dark:border-gray-600" />
                    <button
                      onClick={() => alert("Logout functionality")}
                      className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/Login"
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/Signup"
                      className="block px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className=" md:hidden h-full bg-gray-800 text-white transition-all duration-300 ease-in-out transform -translate-x-full z-50"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="px-4 py-2 space-y-4">
            <SearchBar />
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-blue-500 "
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <div className="relative group">
              <button className="w-full text-left px-4 py-2 hover:bg-blue-500">
                More <span>&#9662;</span>
              </button>
              <div className="absolute left-0 hidden w-40 bg-gray-200 dark:bg-gray-800 dark:text-white group-hover:flex flex-col z-50 shadow-md rounded">
                <Link
                  href="/portfolio"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative mt-4">
              <button
                className="w-full text-left px-4 py-2 hover:bg-blue-500"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {user ? "Profile" : "Login / Sign Up"}
              </button>
              {menuOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                  {user ? (
                    <>
                      <p className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                        Hello, {user.name}
                      </p>
                      <hr className="border-gray-300 dark:border-gray-600" />
                      <button
                        onClick={() => alert("Logout functionality")}
                        className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/Login"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                      >
                        Login
                      </Link>
                      <Link
                        href="/Signup"
                        className="block px-4 py-2 hover:bg-blue-500 hover:text-white dark:hover:bg-gray-700"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
