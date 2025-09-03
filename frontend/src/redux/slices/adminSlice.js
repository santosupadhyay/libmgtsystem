import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/api/books";

const initialState = {
  loading: false,
  error: null,
  books: [],
};

export const fetchBooks = createAsyncThunk(
  "admin/fetchBooks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const addBook = createAsyncThunk(
  "admin/addBook",
  async (bookData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      console.log(state);
      const token = state.auth.token;
      const response = await axios.post(API_URL, bookData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const updateBook = createAsyncThunk(
  "admin/updateBook",
  async ({ id, bookData }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      const response = await axios.put(`${API_URL}/${id}`, bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "admin/deleteBook",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.data;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload.data);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || action.error?.message || "Failed to add book";
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.books = state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        );
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book._id !== action.payload);
      });
  },
});
export default adminSlice.reducer;
