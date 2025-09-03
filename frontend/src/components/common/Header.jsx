import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  return (
    <header className="bg-gradient-to-r from-blue-400 to-indigo-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <FaBook className="text-white text-3xl animate-bounce" />
            <Link
              to="/"
              className="text-white text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors"
            >
              LibraryMS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-white">
            <Link to="/" className="hover:text-yellow-300 transition-colors text-lg">
              Home
            </Link>
            <Link to="/mybooks" className="hover:text-yellow-300 transition-colors text-lg">
              MyBooks
            </Link>
            <Link to="/catalog" className="hover:text-yellow-300 transition-colors text-lg">
              Catalog
            </Link>
            {token && (
              <Link
                to="/profile"
                className="hover:text-yellow-300 transition-colors text-lg flex items-center space-x-1"
              >
                <FaUserCircle className="text-2xl" />
                <span>Profile</span>
              </Link>
            )}
            {role === "admin" && (
              <Link to="/admin" className="hover:text-yellow-300 transition-colors text-lg">
                Dashboard
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-500 text-white px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/mybooks"
            className="block hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            MyBooks
          </Link>
          <Link
            to="/catalog"
            className="block hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Catalog
          </Link>
          {token && (
            <Link
              to="/profile"
              className="hover:text-yellow-300 flex items-center space-x-1"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserCircle className="text-2xl" />
              <span>Profile</span>
            </Link>
          )}
          {role === "admin" && (
            <Link to="/admin" className="block hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
