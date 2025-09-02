const express = require("express");

const Book = require("../models/Book");
const BookRepository = require("../repositories/bookRepository");
const BookService = require("../services/bookService");
const BookController = require("../controllers/bookController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

const bookRepo = BookRepository(Book);
const bookService = BookService(bookRepo);
const bookController = BookController(bookService);

router.post("/", authMiddleware, bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", authMiddleware, bookController.updateBookById);
router.delete("/:id", authMiddleware, bookController.deleteBookById);

module.exports = router;