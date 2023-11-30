import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface Item {
  body: string;
  id: number;
  title: "string";
  userId: number;
}

const likeItemSLice = createSlice({
  name: "likedItems",
  initialState: [] as Item[],
  reducers: {
    likeItem: (state, action: PayloadAction<Item>) => {
      if (state.some((item) => item.id === action.payload.id)) {
        toast.error("Already liked");
        return;
      }
      state.push(action.payload);
      toast.success("Liked");
    },
    dislikeItem: (state, action: PayloadAction<Item>) => {
      if (!state.some((item) => item.id === action.payload.id)) {
        toast.error("Not found");
        return state;
      }
      toast.success("Disliked");
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { likeItem, dislikeItem } = likeItemSLice.actions;

export default likeItemSLice.reducer;
