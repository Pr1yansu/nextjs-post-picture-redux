import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

const savedItemsSlice = createSlice({
  name: "savedItems",
  initialState: [] as Item[],
  reducers: {
    saveItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    unsaveItem: (state, action: PayloadAction<Item>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { saveItem, unsaveItem } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
