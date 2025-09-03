const BookRepository = ( book ) => ({
    createBook : async(bookData) => {
        return await book.create(bookData)
    },
    getAllBooks: async() => {
        return await book.find()
    },
    getBookById : async(id) => { 
        return await book.findById(id)
    },
    updateBookById : async(id, updateData) => {
        return await book.findByIdAndUpdate(id, updateData, {new:true})
    },
    deleteBookById: async(id) => {
        return await book.findByIdAndDelete(id)
    }
})
module.exports = BookRepository;