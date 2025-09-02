const BookController = (bookService) => ({
    createBook: async(request, response) => {
        try {
            const userRole = request.user.role;
            const book = await bookService.createBook(request.body, userRole);
            response.status(201).json({
                success:true,
                message:'Book created successfully!!',
                data:book
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
    getAllBooks: async(request, response) => {
        try {
            const books = await bookService.getAllBooks();
            response.status(200).json({
                success:true,
                message:'Books fetched successfully',
                data:books
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
    getBookById: async(request, response) => {
        try {
            const book = await bookService.getBookById(request.params.id);
            response.status(200).json({
                success:true,
                message:'Book fetched successfully!!!',
                data:book
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
    updateBookById: async(request, response) => {
        try {
            const userRole = request.user.role;
            const updatedBook = await bookService.updateBookById(request.params.id, request.body, userRole);
            response.status(200).json({
                success:true,
                message:'Book updated successfully!!!',
                data:updatedBook
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
    deleteBookById: async(request, response) => {
        try {
            const userRole = request.user.role;
            const deletedBook = await bookService.deleteBookById(request.params.id, userRole);
            response.status(200).json({
                success:true,
                message:'Book deleted successfully !!!',
                data:deletedBook
            })
        } catch (error) {
            return response.status(500).json({
                success:false,
                message:error.message
            })
        }
    },
})
module.exports = BookController;