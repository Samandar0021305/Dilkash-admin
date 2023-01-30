import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/categorySlice";
import foodSlice from "./feature/foodSlice";
const store = configureStore({
  reducer: { category: categorySlice ,food:foodSlice},
});

export default store;
