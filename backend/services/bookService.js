const BookService = (bookRepo) => ({
  createBook: async (bookData, userRole) => {
    if (userRole !== "admin") {
      throw new Error("Only admins can create books");
    }
    const existingBooks = await bookRepo.getAllBooks();
    const existingBook = existingBooks.find(
      (b) =>
        b.title.toLowerCase() === bookData.title.toLowerCase() &&
        b.category.toLowerCase() === bookData.category.toLowerCase()
    );
    if (existingBook) {
      const updatedBook = await bookRepo.updateBookById(existingBook._id, {
        quantity: existingBook.quantity + (bookData.quantity || 1),
      });
      return updatedBook;
    }
    return await bookRepo.createBook(bookData);
  },
  getAllBooks: async () => {
    return await bookRepo.getAllBooks();
  },
  getBookById: async (id) => {
    const book = await bookRepo.getBookById(id);
    if (!book) throw new Error("Book not found");
    return book;
  },
  updateBookById: async (id, updateData, userRole) => {
    const updatedBook = await bookRepo.updateBookById(id, updateData);
    if (!updatedBook) throw new Error("Book not found or cannot edit");
    return updatedBook;
  },
  deleteBookById: async (id, userRole) => {
    if (userRole !== "admin") throw new Error("Only admins can delete books");
    const deletedBook = await bookRepo.deleteBookById(id);
    if (!deletedBook) throw new Error("Book not found or cannot delete");
    return deletedBook;
  },
});
module.exports = BookService;
