import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51S3E66CNNhnxbpx9labnJeqcsw2lkO68dC1390wlFKKzL56xVlSYIoq5eo0iJb8r3fEmoXSsoUQ8UDlKy4FewHZ200v3NSEEZt"
);

const BookCard = ({ id, title, author, category, price, available }) => {
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  const handleBorrow = async () => {
    console.log(id, email);
    if (!available) return alert("Book not available");

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/payment/create-checkout",
        {
          bookId: id,
          userEmail: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!data.success) throw new Error(data.message);

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error(err);
      alert("Payment failed: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-1">Author: {author}</p>
        <p className="text-gray-600 mb-1">Category: {category}</p>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <p className="text-gray-600 mb-2">
          Available: {available ? "Yes" : "No"}
        </p>
      </div>
      <div className="p-6 mt-auto">
        <button
          onClick={handleBorrow}
          disabled={loading || !available}
          className={`w-full py-2 text-white rounded-full transition ${
            available
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Borrow & Pay"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
