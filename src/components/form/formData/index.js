import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../modules/category.api";
import { fetchCategories } from "../../../redux/feature/categorySlice";

const FormDataFood = () => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const fetchCategory = async () => {
    const res = await getCategory();
    return res;
  };

  useEffect(() => {
    fetchCategory().then((res) => dispatch(fetchCategories(res.data)));
  }, [dispatch]);

  function arrs() {
    let arr = [];
    categories.map((item) => {
      arr.push({ value: item.id, label: item.title });
    });
    return arr;
  }

  return [
    {
      name: "name",
      type: "input",
      label: "Name",
      required: true,
      validationsType: "string",
      value: "",
    },
    {
      name: "content",
      type: "input",
      label: "Description",
      required: true,
      validationsType: "string",
      value: "",
    },
    {
      name: "price",
      type: "input",
      label: "Price",
      required: true,
      validationsType: "number",
      value: "",
    },
    {
      name: "image",
      type: "file",
      label: "Image",
      // required: true,
      validationsType: "object",
    },
    {
      name: "category_id",
      type: "select",
      label: "Category",
      required: true,
      options: arrs(),
      validationsType: "string",
    },
  ];
};

export default FormDataFood;
