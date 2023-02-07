import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  deleteCategory,
  getProductByCategory,
} from "../modules/category.api";
import { fetchCategories } from "../redux/feature/categorySlice";
import { fetchFood } from "../redux/feature/foodSlice";
import { getProduct } from "../modules/food.api";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";
import {actions} from '../utils/actions'
const _page = 'category'
const Widget = React.lazy(() => import("../components/Widget"));

const Category = () => {
  const [status, setStatus] = useState();
console.log('hello')
  // const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);
  const {get, post, put,getById, remove} = actions(_page)
  // const fetchProductByCateg = async () => {
  //   if (categoryId) {
  //     const res = await getProductByCategory(categoryId);
  //     return res;
  //   }
  // };
  // useEffect(() => {
  //   fetchProductByCateg().then((res) => console.log(res));
  // }, [categoryId]);

  // Fetching data
  const fetchCategory = async () => {
    const res = await getCategory();
    return res;
  };

  // useEffect(() => {
  //   fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  // }, [dispatch]);

  // Fetching data ends

  // Deleting data

  const deleteItem = () => {
    if (categoryId) {
      // dispatch(closeModal("close"));
      deleteCategory(categoryId).then((res) => setStatus(res.statusCode));
    }
    if (parseInt(status) === 200) {
      // fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
      toast.success("Category successfully deleted!");
    } else {
      toast.error("Error, Category was not deleted!");
    }
  };
  const getCategory = async () => {
  const data = await get()
  console.log(data)
  
  }
  // Deleting data ends
  useEffect( () =>{
   getCategory()
    // dispatch(fetchCategories(data))
   
   })
  // return (
  //   <div className="w-full">
  //     <Widget data={categories} deleteItem={deleteItem} />
  //   </div>
  // );
};

export default Category;
