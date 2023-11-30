import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      if (state.some((item) => item.id === action.payload.id)) {
        toast.error("Already saved");
        return;
      }
      state.push(action.payload);
      toast.success("Saved");
    },
    unsaveItem: (state, action: PayloadAction<Item>) => {
      if (!state.some((item) => item.id === action.payload.id)) {
        toast.error("Not found");
        return state;
      }
      toast.success("Unsaved");
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { saveItem, unsaveItem } = savedItemsSlice.actions;

export default savedItemsSlice.reducer;
