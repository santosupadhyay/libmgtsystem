import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBook,
  fetchBooks,
  updateBook,
} from "../../redux/slices/adminSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const { loading, error, books } = useSelector((state) => state.admin);

  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    price: "",
    quantity: "",
    available: "yes",
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (book) => {
    dispatch(deleteBook(book._id));
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData({
      title: book.title,
      description: book.description,
      author: book.author,
      price: book.price,
      category: book.category,
      quantity: book.quantity,
      available: book.available,
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === "checkbox" ? (checked ? "yes" : "no") : value,
  });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      dispatch(updateBook({ id: editingBook._id, bookData: formData }));
    setEditingBook(null);
    } catch (error) {
      console.log(error)
    }finally{
      dispatch(fetchBooks())
    }
    
    dispatch(fetchBooks())
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p className="text-md text-blue-400">Loading</p>
      ) : (
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
                  <tr key={book._id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{book.title}</td>
                    <td className="border px-4 py-2">{book.author}</td>
                    <td className="border px-4 py-2">{book.category}</td>
                    <td className="border px-4 py-2">${book.price}</td>
                    <td className="border px-4 py-2">
                      {book.available ? "Yes" : "No"}
                    </td>
                    <td className="border px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(book)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
      {editingBook && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Book</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full border px-3 py-2 rounded"
              />
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                className="w-full border px-3 py-2 rounded"
              />
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border px-3 py-2 rounded"
              />
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border px-3 py-2 rounded"
              />
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border px-3 py-2 rounded"
              />
              <label>Description</label>
              <textarea
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border px-3 py-2 rounded"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                />
                <span>Available</span>
              </label>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingBook(null)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
