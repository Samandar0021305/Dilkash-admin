import React, { useEffect, useState } from "react";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import FormDataFood from "../form/formData/productAdd";
import { actions } from "../../utils/actions";
import { useNavigate, useParams } from "react-router-dom";
const _page = "product";

const ProductEdit = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { put, getById } = actions(_page);

  const param = useParams();
  const id = param.productId;

  const onSubmit = async (data) => {
    await put({ id, data }).then((res) => navigate("/foods"));
  };

  const fetchProductbyId = async () => {
    if (id) {
      const res = await getById({ id });
      return res;
    }
  };

  useEffect(() => {
    fetchProductbyId().then((res) => setProduct(res.data?.data));
  }, []);

  const arrayFunc = () => {
    let arr = FormDataFood();
    arr.forEach((item) => {
      item.value = product[item.name];
    });

    return arr;
  };

  const arr = arrayFunc();

  if (product?.name) {
    return (
      <div>
        <FormBuilder feilds={arr} onSubmit={onSubmit} title={"Update Product"}>
          <button className="border p-[10px]" type="submit">
            Submit
          </button>
        </FormBuilder>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default ProductEdit;
