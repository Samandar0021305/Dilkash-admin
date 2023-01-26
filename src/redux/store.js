import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/categorySlice";

const store = configureStore({
  reducer: { category: categorySlice },
});

export default store;
