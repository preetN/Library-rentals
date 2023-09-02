import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./pages/books/bookSlice";
import borrowReducer from "./pages/borrow-history/borrowSlice";
import adminReducer from "./user/userSlice";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    book: bookReducer,
    borrowHistory: borrowReducer,
  },
});
