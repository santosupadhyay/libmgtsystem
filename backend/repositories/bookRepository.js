const Book = require('../models/Book')
const bookRepository = () => ({
    createBook : async(BookData) => {
        return await Book.create(BookData)
    },
    getAllBooks: async() => {
        return await Book.find()
    },
    getBookById : async(id) => { 
        return await Book.findById(id)
    },
    updateBookById : async(id, updateData) => {
        return await Book.findByIdAndUpdate(id, updateData, {new:true})
    },
    deleteBookById: async(id) => {
        return await Book.findByIdAndDelete(id)
    }
})
module.exports = bookRepository;