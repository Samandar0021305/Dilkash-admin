import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: "close",
  },
  reducers: {
    openModal: (state, action) => {
      state.show = action.payload;
    },
    closeModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
