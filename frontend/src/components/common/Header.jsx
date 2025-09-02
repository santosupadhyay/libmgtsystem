import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBook, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "MyBooks", path: "/mybooks" },
    { name: "Catalog", path: "/catalog" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaBook className="text-blue-600 text-2xl" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              LibraryMS
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1 transition-colors"
                    : "hover:text-blue-600 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Profile Icon */}
          <div className="flex items-center space-x-2">
            <span className="hidden sm:block text-gray-700 font-medium">
              Admin
            </span>
            <FaUserCircle className="text-gray-500 text-3xl" />
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            {/* You can add a hamburger menu here */}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
