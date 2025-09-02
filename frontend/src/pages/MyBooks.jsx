import React from "react";

const MyBooks = () => {
  const borrowedBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", due: "2025-09-10" },
    { title: "1984", author: "George Orwell", due: "2025-09-15" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", due: "2025-09-20" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">My Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {borrowedBooks.map((book, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">{book.title}</h3>
            <p className="text-gray-700 mb-1">Author: {book.author}</p>
            <p className="text-gray-500 text-sm">Due: {book.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
