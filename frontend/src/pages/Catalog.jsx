import React from "react";

const Catalog = () => {
  const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "Classic" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction" },
    { title: "Moby Dick", author: "Herman Melville", category: "Adventure" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{book.title}</h3>
            <p className="text-gray-700 mb-1">Author: {book.author}</p>
            <p className="text-gray-500 mb-4 text-sm">Category: {book.category}</p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Borrow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
