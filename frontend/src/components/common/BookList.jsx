import React from "react";

const BookList = () => {
  // Static book data
  const books = [
    { id: 1, title: "The Silent Patient", author: "Alex Michaelides", category: "Thriller", price: 15, available: true },
    { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: 20, available: false },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "Self-help", price: 10, available: true },
    { id: 4, title: "1984", author: "George Orwell", category: "Fiction", price: 12, available: true },
    { id: 5, title: "Educated", author: "Tara Westover", category: "Memoir", price: 18, available: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">All Books</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Author</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Price</th>
                <th className="border px-4 py-2 text-left">Available</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.category}</td>
                  <td className="border px-4 py-2">${book.price}</td>
                  <td className="border px-4 py-2">{book.available ? "Yes" : "No"}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookList;
