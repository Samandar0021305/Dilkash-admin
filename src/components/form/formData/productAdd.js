import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../../../redux/feature/categorySlice";
import { actions } from "../../../utils/actions";
const _page1 = "category";
const _page2 = "product";

const FormDataFood = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { get } = actions(_page1);

  const fetchCategory = async () => {
    const res = await get();
    return res;
  };

  useEffect(() => {
    fetchCategory().then((res) => dispatch(fetchCategories(res)));
  }, [dispatch]);

  function arrs() {
    let arr = [];
    categories?.map((item) => {
      arr.push({ value: item.id, label: item.title, selected: false });
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
      value: "",
    },
    {
      name: "category_id",
      type: "select",
      label: "Category",
      required: true,
      options: arrs(),
      validationsType: "string",
      value: "",
    },
  ];
};

export default FormDataFood;
