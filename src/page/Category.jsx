import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../modules/category.api";

import { fetchCategories, getByProduct } from "../redux/feature/categorySlice";
import { actions } from "../utils/actions";
const Widget = React.lazy(() => import("../components/Widget"));

const _page = "category";

const Category = () => {
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);
  const { get } = actions(_page);
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

  const deleteItem = () => {
    if (categoryId) {
      // dispatch(closeModal("close"));
      deleteCategory(categoryId).then((res) => setStatus(res.statusCode));
    }
  };
  // useEffect(() => {
  //   if (parseInt(status) === 200) {
  //     // fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  //     toast.success("Category successfully deleted!");
  //     setStatus(0);
  //   } else if (parseInt(status) >= 400) {
  //     toast.error("Error, Category was not deleted!");
  //   }
  // });
  const getCategory = async () => {
    const data = await get();
    return data;
  };
  // Deleting data ends
  useEffect(() => {
    getCategory().then((res) => dispatch(fetchCategories(res)));
    // dispatch(fetchCategories(data))
  }, []);

  console.log(categories);
  return (
    <div className="w-full">
      <Widget data={categories} deleteItem={deleteItem} />
    </div>
  );
};

export default Category;
