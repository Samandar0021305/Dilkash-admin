import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/categorySlice";
import productSlice from "./feature/productSlice";

const store = configureStore({
  reducer: { category: categorySlice, product: productSlice },
});

export default store;
