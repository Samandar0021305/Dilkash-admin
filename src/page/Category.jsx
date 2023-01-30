import React, { useEffect } from "react";
import { getCategory } from "../modules/category.api";
import Table from "../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/feature/categorySlice";

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

  return (
    <div className="w-full">
      <Widget />
      <Table data={data} />
    </div>
  );
});

export default Category;
