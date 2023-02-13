import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../modules/category.api";

import { fetchCategories } from "../redux/feature/categorySlice";
import Pagination from "../components/pagination/Paginations";
import { actions } from "../utils/actions";
const Widget = React.lazy(() => import("../components/Widget"));

const _page = "category";

const Category = () => {
  const [status, setStatus] = useState();
  const [pagination, setPagination] = useState({ page: 1, pageSize: 5 });
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state.category);
  const { get } = actions(_page);

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
  }, [pagination.page, pagination.pageSize]);

  const paginationHandler = (page) => {
    setPagination((prev) => ({
      ...prev,
      page: page,
    }));
  };
  const handleChange = (pageSize) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: pageSize,
    }));
  };

  return (
    <div className="w-full relative h-[85vh]">
      <Widget data={categories} deleteItem={deleteItem} />
      <div className="absolute bottom-0 w-full">
        <Pagination
          page={pagination.page}
          paginationHandler={paginationHandler}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Category;
