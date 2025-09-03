import React, { useEffect, useState } from "react";
import BookCard from "../components/ui/BookCard";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const API_URL = "http://localhost:3000/api/books";

const Catalog = () => {
  const [books, setBooks] = useState([]);

  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}`);
    const result = response.data.data;
    setBooks(result);
    setFilteredBooks(result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query.trim === "") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-10 space-y-4 md:space-y-0 md:space-x-6">
        {/* Search Bar with Icon */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search books..."
            className="w-full pl-12 pr-4 py-2 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Sort Buttons */}
        <div className="flex space-x-3">
          <button className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            ASC
          </button>
          <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            DSC
          </button>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              author={book.author}
              category={book.category}
              price={book.price}
              available={book.available}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No books found</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
