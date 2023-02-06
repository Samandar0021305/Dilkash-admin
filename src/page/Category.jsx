import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  deleteCategory,
  getProductByCategory,
} from "../modules/category.api";
import { fetchCategories } from "../redux/feature/categorySlice";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";
const Widget = React.lazy(() => import("../components/Widget"));

const Category = React.memo(() => {
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);

  // console.log(categories);

  //  fetchProductByCategory

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

  useEffect(() => {
    fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  }, [dispatch]);

  // Fetching data ends

  // Deleting data

  const deleteItem = () => {
    if (categoryId) {
      dispatch(closeModal("close"));
      deleteCategory(categoryId).then((res) => setStatus(res.statusCode));
    }
    if (parseInt(status) === 200) {
      fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
      toast.success("Category successfully deleted!");
    } else {
      toast.error("Error, Category was not deleted!");
    }
  };

  // Deleting data ends

  return (
    <div className="w-full">
      <Widget data={categories} deleteItem={deleteItem} />
    </div>
  );
});

export default Category;
