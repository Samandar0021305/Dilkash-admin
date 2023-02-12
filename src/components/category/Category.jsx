import React, { useEffect, useState } from "react";
import FormBuilder from "../form/FormBuilder/FormBuilder";
import FormDataFood from "../form/formData/categoryAdd";
import { actions } from "../../utils/actions";
import { useNavigate, useParams } from "react-router-dom";
import FormDataCategory from "../form/formData/categoryAdd";
const _page = "category";

const CategoryActions = () => {
  const [category, setcategory] = useState({});

  const navigate = useNavigate();

  const { post, put, getById } = actions(_page);

  const param = useParams();
  const id = param.categoryId;

  const onSubmit = async (data) => {
    if (id === "new") {
      await post(data).then(() => navigate("/category"));
    } else {
      await put({ id, data }).then(() => navigate("/category"));
    }
  };

  const fetchCategorybyId = async () => {
    if (id) {
      const res = await getById({ id });
      return res;
    }
  };

  useEffect(() => {
    if (id !== "new") {
      fetchCategorybyId().then((res) => setcategory(res.data?.data));
    }
  }, []);

  const arrayFunc = () => {
    let arr = FormDataCategory();
    if (id === "new") {
      return arr;
    }
    arr.forEach((item) => {
      item.value = category[item.name];
    });
    return arr;
  };

  const arr = arrayFunc();
  const indicator = id === "new" ? true : category.title;

  if (indicator) {
    return (
      <div className=" shadow-md">
        <FormBuilder feilds={arr} onSubmit={onSubmit} title={ id==="new" ?  "Create Category" : "Update Category"}>
          <button className="border w-[120px] mt-[20px] rounded-md bg-green-500 text-white p-[10px]" type="submit">
            Submit
          </button>
        </FormBuilder>
      </div>
    );
  }
};

export default CategoryActions;
