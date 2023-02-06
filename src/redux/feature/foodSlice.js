import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: [],
    error: "",
  },
  reducers: {
    fetchFood: (state, action) => {
      if (action.payload) {
        state.foods = action.payload;
      }
    },
    addFood: (state, action) => {
      state.foods = [action.payload, ...state.foods];
    },
    deleteFood: (state, action) => {
      const { categId } = action.payload;
      state.foods = [...state.foods].filter(
        (item) => item.categId.toString() !== categId.toString()
      );
    },
  },
});

export const { fetchFood, addFood, deleteFood } =
foodSlice.actions;
export default foodSlice.reducer;
