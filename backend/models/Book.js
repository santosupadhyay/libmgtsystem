const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      default: 1,
    },
    author:{
      type:String,
      required:[true, 'Author is required']
    },
    available:{
      type:String,
      enum:['yes', 'no'],
      default:'yes'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
