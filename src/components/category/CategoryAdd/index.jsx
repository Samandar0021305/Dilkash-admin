import React from "react";
import FormBuilder from "../../form/FormBuilder/FormBuilder";
import FormDataFood from "../../form/formData/categoryAdd";
import { actions } from "../../../utils/actions";
import { useNavigate } from "react-router-dom";
const _page = "category";

const CategoryCreate = () => {
  const navigate = useNavigate();

  const { get, post, put, getById, remove } = actions(_page);

  const onSubmit = async (values) => {
    await post(values).then((res) => navigate("/category"));
    console.log(values);
  };
  return (
    <div>
      <FormBuilder
        feilds={FormDataFood()}
        onSubmit={onSubmit}
        title={"Create Category"}
      >
        <button className="border p-[10px]" type="submit">
          Submit
        </button>
      </FormBuilder>
    </div>
  );
};

export default CategoryCreate;
