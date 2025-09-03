import React from "react";
import { FaBook, FaUserGraduate, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to LibraryMS
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">
            Manage your library efficiently. Browse books, track your
            borrowings, and stay organized.
          </p>
          <Link
            to="/catalog"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Browse Catalog
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaBook className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Extensive Library</h3>
            <p className="text-gray-600">
              Access a wide collection of books across multiple categories and
              genres.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaUserGraduate className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Your Books</h3>
            <p className="text-gray-600">
              Keep track of borrowed books, due dates, and manage your reading
              efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaSearch className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
            <p className="text-gray-600">
              Quickly find books with our simple and fast search functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      {token ? (
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Again a warm welcome !
            </h2>
            <p className="mb-8">
              Start reading our books. Take advantage of our app
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-blue-400 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to start reading?
            </h2>
            <p className="mb-8">
              Sign up today and manage your library efficiently.
            </p>
            <Link
              to="/auth/login"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
