import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../redux/feature/categorySlice";
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


  const deleteItem = () => {
    if (categoryId) {
      dispatch(closeModal("close"));
      remove(categoryId).then((res) => setStatus(res.statusCode));
    }
  };
  useEffect(() => {
    if (parseInt(status) === 200) {
      get().then((res) => dispatch(fetchCategories(res.data)));
      toast.success("Category successfully deleted!");
      setStatus(0);
    } else if (parseInt(status) >= 400) {
      toast.error("Error, Category was not deleted!");
    }
  });
  const getCategory = async () => {
    const data = await get();
    return data
  };

  useEffect(() => {
    getCategory().then((res) => dispatch(fetchCategories(res)));
  }, []);

  return (
    <div className="w-full">
      <Widget data={categories} deleteItem={deleteItem} />
    </div>
  );
};

export default Category;
