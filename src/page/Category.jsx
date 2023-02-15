import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteCategory, fetchCategories } from "../redux/feature/categorySlice";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";
import LoaderComponent from "../components/Loader/LoaderComponent";
import Pagination from "../components/pagination/Paginations";
import { actions } from "../utils/actions";

const _page = "category";

const Widget = React.lazy(() => import("../components/Widget"));


const Category = () => {
  const [status, setStatus] = useState();
  const [pagination, setPagination] = useState({ page: 1, pageSize: 5 });
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);
  const { get,remove } = actions(_page);
    

  const deleteItem = () => {
    if (categoryId) {
      deleteCategory(categoryId).then((res) => setStatus(res.statusCode));
    }
  };

  const getCategory = async () => {
    const data = await get({ ...pagination });
    return data;
  };
  useEffect(() => {
    getCategory().then((res) => dispatch(fetchCategories(res)));
  }, []);

  

  useEffect(() => {
    if (parseInt(status) === 200) {
      remove().then((res) => dispatch(fetchCategories(res.data)));
      toast.success("Category successfully deleted!");
      setStatus(0);
    } else if (parseInt(status) >= 400) {
      toast.error("Error, Category was not deleted!");
    }
});

  return (
    <div className="w-full">
      {
        categories.length ? 
        <Widget data={categories} 
        deleteItem={deleteItem} /> :
        <LoaderComponent/> 
      }
      </div>

  )}


export default Category;
