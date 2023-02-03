import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../modules/category.api";
import { deleteCategory, fetchCategories } from "../redux/feature/categorySlice";
import { fetchFood } from "../redux/feature/foodSlice";
import { getProduct } from "../modules/food.api";
const Widget = React.lazy(() => import("../components/Widget"));

const Category = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.categories);

  const fetchCategory = async () => {
    const res = await getCategory();
    return res;
  };

  useEffect(() => {
    fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  }, [dispatch]);

  const deleteItem = (id) => {
    // deleteCategory(id);
    dispatch(deleteCategory(id));
  };


  return (
    <div className="w-full">
      <Widget data={data} deleteItem={deleteItem} />
    </div>
  );
});

export default Category;
