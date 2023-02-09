import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../../modules/food.api";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import FormDataFood from "../form/formData/productAdd";
import { actions } from "../../utils/actions";
const _page = "product";

const ProductCreate = () => {
  const navigate = useNavigate();
  const { get, post, put, getById, remove } = actions(_page);

  const onSubmit = async (values) => {
    await post(values).then((res) => navigate("/foods"));
    console.log(values);
  };
  // useEffect(() => {
  //   if (status && status == 201) {
  //     toast.success("Product successfully created!");
  //     navigate("/foods");
  //   } else if (400 <= status) {
  //     toast.error("Error, Product was not created!");
  //   }
  // }, [status]);

  return (
    <FormBuilder
      feilds={FormDataFood()}
      onSubmit={onSubmit}
      title={"Add Product"}
    >
      <button className="border p-[10px]" type="submit">
        Submit
      </button>
    </FormBuilder>
  );
};

export default ProductCreate;
