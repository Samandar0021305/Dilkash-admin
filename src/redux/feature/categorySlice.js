import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoryId:"",
    productcategory:[],
    error: "",
  },
  reducers: {
    fetchCategories: (state, action) => {
      if (action.payload) {
        state.categories = action.payload;
      }
    },
    getByProductId:(state,action)=>{
      state.categoryId = action.payload 
    },
    getByProduct:(state,action)=>{
     if(action.payload){
      state.productcategory = action.payload
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

export const { fetchCategories, addCategory, deleteCategory ,getByProductId,getByProduct} =
  categorySlice.actions;
export default categorySlice.reducer;
