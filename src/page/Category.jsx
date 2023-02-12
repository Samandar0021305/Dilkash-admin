import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCategory, fetchCategories, getByProduct } from "../redux/feature/categorySlice";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";

import { actions } from "../utils/actions";

const _page = "category";

const Widget = React.lazy(() => import("../components/Widget"));
const Category = () => {
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);
  const { get,remove } = actions(_page);
  
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
  // const fetchCategory = async () => {
  //   const res = await getCategory();
  //   return res;
  // };

  // useEffect(() => {
  //   fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  // }, [dispatch]);

  // Fetching data ends

  // Deleting data

  // useEffect(() => {
  //   if (parseInt(status) === 200) {
  //     // fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  //     toast.success("Category successfully deleted!");
  //     setStatus(0);
  //   } else if (parseInt(status) >= 400) {
  //     toast.error("Error, Category was not deleted!");
  //   }
  // })
  const getCategory = async () => {
    const data = await get();
    return data;
  };
  useEffect(() => {
    getCategory().then((res) => dispatch(fetchCategories(res)));
  }, []);

  const deleteItem = () => {
    if (categoryId) {
      dispatch(closeModal("close"));
      remove(categoryId).then((res) => setStatus(res.statusCode));
    }
  };
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
      <Widget data={categories} deleteItem={deleteItem} />
    </div>
  );
};

export default Category;
