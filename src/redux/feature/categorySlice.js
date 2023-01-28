import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    error: "",
  },
  reducers: {
    fetchCategories: (state, action) => {
      if (action.payload) {
        state.categories = action.payload;
      }
    },
    addCategory: (state, action) => {
      state.categories = [action.payload, ...state.categories];
    },
    deleteCategory: (state, action) => {
      const { categId } = action.payload;
      state.categories = [...state.categories].filter(
        (item) => item.categId.toString() !== categId.toString()
      );
    },
  },
});

export const { fetchCategories, addCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
