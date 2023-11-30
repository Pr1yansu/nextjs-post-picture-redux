import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import photoReducer from "@/lib/functions/photoSlice";
import savedItemsReducer from "@/lib/functions/save";
import postSlice from "./functions/postSlice";
import likedItemsReducer from "./functions/like";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["savedItems", "likedItems"],
};

const rootReducer = combineReducers({
  photo: photoReducer,
  savedItems: savedItemsReducer,
  posts: postSlice,
  likedItems: likedItemsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer) as Reducer;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<AppStore>;
export type AppDispatch = typeof store.dispatch;
