import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/categorySlice";
import productSlice from "./feature/productSlice";
import modalSlice from "./feature/ModalSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    modal: modalSlice,
  },
});

export default store;
