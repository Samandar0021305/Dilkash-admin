import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import FormDataFood from "../form/formData/productAdd";
import { actions } from "../../utils/actions";
const _page = "product";

const ProductCreate = () => {
  const [product, setProduct] = useState({});

  const param = useParams();
  const id = param.productId;

  const navigate = useNavigate();
  const { post, put, getById } = actions(_page);

  const onSubmit = async (data) => {
    if (id === "new") {
      await post(data).then((res) => navigate("/foods"));
    } else {
      await put({ id, data }).then((res) => navigate("/foods"));
    }
  };

  const fetchProductbyId = async () => {
    if (id) {
      const res = await getById({ id });
      return res;
    }
  };

  useEffect(() => {
    if (id !== "new")
      fetchProductbyId().then((res) => setProduct(res.data?.data));
  }, []);

  const arrayFunc = () => {
    let arr = FormDataFood();
    if (id === "new") {
      return arr;
    }
    arr.forEach((item) => {
      item.value = product[item.name];
    });

    return arr;
  };

  const indicator = id === "new" ? true : product.name;

  const arr = arrayFunc();
  if (indicator) {
    return (
      <FormBuilder
        feilds={arr}
        onSubmit={onSubmit}
        title={id === "new" ? "Add Product" : "Update Product"}
      >
        <button
          className="border w-[120px] mt-[20px] rounded-md bg-green-500 text-white p-[10px]"
          type="submit"
        >
          Submit
        </button>
      </FormBuilder>
    );
  }
};

export default ProductCreate;
