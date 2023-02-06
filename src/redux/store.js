import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./feature/categorySlice";
import productSlice from "./feature/productSlice";
import modalSlice from "./feature/ModalSlice";
import OrderSlice from "./feature/OrderSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    modal: modalSlice,
    order:OrderSlice,
  },
});

export default store;
