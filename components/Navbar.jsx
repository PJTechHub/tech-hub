import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } shadow-lg fixed w-full z-50`}
    >
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
            <div
              className={`absolute left-0 hidden w-40 bg-gray-200 dark:bg-gray-800 dark:text-white group-hover:flex flex-col z-50 shadow-md rounded`}
            >
              <Link href="/portfolio" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Portfolio
              </Link>
              <Link href="/contact" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Contact
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
                Blog
              </Link>
            </div>
          </div>
          {/* Search Bar */}
          <form action="/search" method="GET" className="flex items-center">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            Services
          </Link>
          <Link href="/portfolio" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            Portfolio
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            Contact
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">
            Blog
          </Link>
          <form
            action="/search"
            method="GET"
            className="flex items-center mx-4 mt-2"
          >
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
          <button
            onClick={toggleDarkMode}
            className="block mx-auto mt-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
