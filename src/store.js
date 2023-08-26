import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./pages/books/bookSlice";

import adminReducer from "./user/userSlice";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    book: bookReducer,
  },
});
