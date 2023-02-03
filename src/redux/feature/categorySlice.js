import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoryId:"",
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
      const  categId  = action.payload;
      state.categoryId = categId
    },
  },
});

export const { fetchCategories, addCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
