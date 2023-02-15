import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    ordersId:"",
    error: "",
  },
  reducers: {
    fetchOrder: (state, action) => {
      if (action.payload) {
        state.orders = action.payload;
      }
    },
    orderId: (state, action) => {
      if (action.payload) {
        state.ordersId = action.payload;
      }
    },
    addOrder: (state, action) => {
      state.orders = [action.payload, ...state.orders];
    },
    deleteOrder: (state, action) => {
      const id = action.payload;
      state.orders = [...state.orders].filter((item) => item.id !== id);
    },
  },
});

export const { fetchOrder, addOrder, deleteOrder ,orderId} =
OrderSlice.actions;
export default OrderSlice.reducer;
