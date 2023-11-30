import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      if (!state.some((item) => item.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    dislikeItem: (state, action: PayloadAction<Item>) => {
      console.log(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { likeItem, dislikeItem } = likeItemSLice.actions;

export default likeItemSLice.reducer;
