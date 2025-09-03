import React from "react";

const BookCard = ({ title, author, category, price, available }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300">
      {/* Book Info */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Author:</span> {author}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Category:</span> {category}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Price:</span> ${price}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Availability:</span>{" "}
          <span>{available ? "Yes, Available" : "No, Not Available"}</span>
        </p>
      </div>

      {/* Borrow Button */}
      <div className="p-6 mt-auto">
        <button className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookCard;
