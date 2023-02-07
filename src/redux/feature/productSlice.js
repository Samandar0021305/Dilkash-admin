import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    porudctsValeu: [],
    productId: "",
    error: "",
  },
  reducers: {
    fetchProducts: (state, action) => {
      if (action.payload) {
        state.products = action.payload;
      }
    },
    addProductId: (state, action) => {
      state.productId = action.payload;
    },
    getProducts: (state, action) => {
      if (action.payload) {
        state.porudctsValeu = action.payload;
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

export const {
  fetchProducts,
  addProducts,
  deleteProducts,
  getProducts,
  addProductId,
} = productSlice.actions;
export default productSlice.reducer;
