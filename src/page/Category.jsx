import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getCategory,
//   deleteCategory,
//   getProductByCategory,
// } from "../modules/category.api";

import { fetchCategories, getByProduct } from "../redux/feature/categorySlice";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";
import {actions} from '../utils/actions'
const _page = 'category'
const Widget = React.lazy(() => import("../components/Widget"));

const Category = () => {
  const [status, setStatus] = useState();
console.log('hello')
  const dispatch = useDispatch();
  // const { categories, categoryId } = useSelector((state) => state.category);
  const {get, post, put,getById, remove} = actions(_page)
  const getCategory = async () => {
  const data = await get()
  console.log(data)
  
  }
  // Deleting data ends
  useEffect( () =>{
    console.log('userEffacte')
   getCategory()
    // dispatch(fetchCategories(data))
   
   }, [])
  // return (
  //   <div className="w-full">
  //     <Widget data={categories} deleteItem={deleteItem} />
  //   </div>
  // );
};

export default Category;
