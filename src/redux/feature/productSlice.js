import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    error: "",
  },
  reducers: {
    fetchProducts: (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    addProducts: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    deleteProducts: (state, action) => {
      const id = action.payload;
      state.products = [...state.products].filter((item) => item.id !== id);
    },
  },
});

export const { fetchProducts, addProducts, deleteProducts } =
  productSlice.actions;
export default productSlice.reducer;
