import React, { useEffect } from "react";
import { getCategory } from "../modules/category.api";
import Table from "../components/table/Table";

const Widget = React.lazy(() => import("../components/Widget"));
const Category = React.memo(() => {
  const fetchCategory = async () => {
    const res = await getCategory();
    return res;
  };

  useEffect(() => {
    console.log(fetchCategory());
  }, []);

  return (
    <div className="w-full">
      <Widget />
      <Table />
    </div>
  );
});

export default Category;
