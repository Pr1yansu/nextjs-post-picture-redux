import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
export const fetchApiData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get(`${API_BASE_URL}/photos`);
  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchApiData.rejected, (state, action) => {
        state.status = "failed";
        // @ts-ignore
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default apiSlice.reducer;
