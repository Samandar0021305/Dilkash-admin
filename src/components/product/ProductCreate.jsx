import React from "react";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import { feilds } from "../form/formData";

const onSubmit = (values) => {
  console.log(values);
};

const ProductCreate = () => {
  return (
    <FormBuilder feilds={feilds} onSubmit={onSubmit} title={"Add Product"}>
      <button className="border p-[10px]" type="submit">
        Submit
      </button>
    </FormBuilder>
  );
};

export default ProductCreate;
