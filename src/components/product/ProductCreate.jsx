import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../../modules/food.api";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import FormDataFood from "../form/formData";

const ProductCreate = () => {
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await createProduct(values).then((res) => setStatus(res.statusCode));
    console.log(values);
  };
  useEffect(() => {
    if (status && status == 201) {
      toast.success("Product successfully created!");
      navigate("/foods");
    } else if( 400 <= status ) {
      toast.error("Error, Product was not created!");
    }
  }, [status]);

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
