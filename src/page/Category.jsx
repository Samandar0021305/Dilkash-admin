import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, deleteCategory } from "../modules/category.api";
import { fetchCategories } from "../redux/feature/categorySlice";
import { fetchFood } from "../redux/feature/foodSlice";
import { getProduct } from "../modules/food.api";
import { closeModal } from "../redux/feature/ModalSlice";
const Widget = React.lazy(() => import("../components/Widget"));

const Category = React.memo(() => {
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);

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
      deleteCategory(categoryId).then((res) => setStatus(res.statusCode));
    }
    if (parseInt(status) == 200) {
      dispatch(closeModal("close"));
      fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
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
