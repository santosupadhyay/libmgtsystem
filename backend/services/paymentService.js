const stripe = require("../config/stripe");
const Book = require("../models/Book");
const BookRepository = require("../repositories/bookRepository");

const bookRepository = BookRepository(Book);

const createCheckoutSession = async (bookId, userEmail) => {
  console.log("Received bookId:", bookId);
  console.log(userEmail)
  const book = await bookRepository.getBookById(bookId);
  console.log(book)
  if (!book) throw new Error("Book not found");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: book.title },
          unit_amount: book.borrowFee * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cancel`,
    customer_email: userEmail,
  });
  return session;
};

module.exports = { createCheckoutSession };
