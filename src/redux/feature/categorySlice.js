import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    error: "",
    loading: false,
  },
  reducers: {
    fetchCategory: (state, action) => {
      if (action.payload) {
        state.loading = true;
        state.categories = action.payload;
        state.loading = false;
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

export const { fetchCategory, addCategory, deleteCategory } =
  categorySlice.actions;
export default categorySlice.reducer;
