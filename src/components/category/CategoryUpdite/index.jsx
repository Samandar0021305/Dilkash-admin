import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actions } from "../../../utils/actions";
import FormBuilder from "../../form/FormBuilder/FormBuilder";
import FormDataCategory from "../../form/formData/categoryAdd";
const _page = "category";

const CategoryUpdate = React.memo(() => {
  const [category, setcategory] = useState({});
  const navigate = useNavigate();
  const { put, getById } = actions(_page);

  const param = useParams();
  const id = param.categoryId;

  const onSubmit = async (data) => {
    await put({ id, data }).then((res) => navigate("/category"));
  };

  const fetchCategorybyId = async () => {
    if (id) {
      const res = await getById({ id });
      return res;
    }
  };

  useEffect(() => {
    fetchCategorybyId().then((res) => setcategory(res.data?.data));
  }, []);

  const arrayFunc = () => {
    let arr = FormDataCategory();
    arr.forEach((item) => {
      item.value = category[item.name];
    });

    return arr;
  };

  const arr = arrayFunc();
  if (category?.title) {
    return (
      <div>
        <FormBuilder feilds={arr} onSubmit={onSubmit} title={"Update Category"}>
          <button className="border p-[10px]" type="submit">
            Submit
          </button>
        </FormBuilder>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
});

export default CategoryUpdate;
