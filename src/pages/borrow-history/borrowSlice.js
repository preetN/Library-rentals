import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  borrowHistoryList: [],
};
export const borrowSlice = createSlice({
  name: "borrowHistory",
  initialState,
  reducers: {
    setBorrowHistory: (state, action) => {
      state.borrowHistoryList = action.payload;
    },
  },
});

export const { setBorrowHistory } = borrowSlice.actions;

export default borrowSlice.reducer;
