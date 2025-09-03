// pages/AddBook.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../redux/slices/adminSlice";
import Toast from "../ui/Toast";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    price: "",
    quantity: "",
    available: "yes",
  });

  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.admin);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      author: "",
      price: "",
      quantity: "",
      available: "yes",
    });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addBook(formData)).unwrap();
      setToast({ message: "Book added successfully!", type: "success" });
      resetForm();
      // Auto hide after 3s
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      setToast({ message: "Failed to add book", type: "error" });
      setTimeout(() => setToast(null), 3000);
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Book</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleAddBook}
      >
        {/* Title */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Title:</label>
          <input
            value={formData.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter book title"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Author:</label>
          <input
            value={formData.author}
            name="author"
            onChange={handleChange}
            type="text"
            placeholder="Enter author name"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Category:</label>
          <input
            value={formData.category}
            name="category"
            onChange={handleChange}
            type="text"
            placeholder="Enter category"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Price:</label>
          <input
            value={formData.price}
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="Enter price"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Quantity:</label>
          <input
            value={formData.quantity}
            name="quantity"
            onChange={handleChange}
            type="number"
            placeholder="Enter quantity"
            className="border rounded px-3 py-2"
          />
        </div>

        {/* Available */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Available:</label>
          <select
            value={formData.available}
            name="available"
            onChange={handleChange}
            className="border rounded px-3 py-2"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Description full width */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium mb-1">Description:</label>
          <textarea
            value={formData.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter book description"
            className="border rounded px-3 py-2 h-24"
          />
        </div>

        {/* Add Book button full width */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Adding..." : error ? "Can't add book" : "Add Book"}
          </button>
        </div>
      </form>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default AddBook;
