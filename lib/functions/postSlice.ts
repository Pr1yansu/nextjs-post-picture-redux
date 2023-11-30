import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
export const fetchPosts = createAsyncThunk("api/fetchPosts", async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
});

const postSlice = createSlice({
  name: "api/posts",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        // @ts-ignore
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default postSlice.reducer;
