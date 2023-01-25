import React, { useEffect, useState } from "react";
import categoryApi from "../modules/category.api";
import productApi from "../modules/food.api";

const ApiCheck = () => {
  const [page, setPage] = useState({ page: 1, pageSize: 2 });
  const [category, setCategory] = useState({
    title: "Shirinliklar",
    image: "1674547599272-wallpaper2you_478525.jpg",
  });
  const [product, setProduct] = useState({
    name: "palow",
    content: "beshqozon palow",
    price: "40000",
    image: "1674547599272-wallpaper2you_478525.jpg",
    category_id: "14466288-0efa-4aad-930c-490f7053dd98",
  });

  //   Category check

  useEffect(() => {
    // category get

    const res = categoryApi.getCategory(page.page, page.pageSize);
    console.log ("getCateg -------------", res);

    // add category

    const res2 = categoryApi.addCategory(category);
    console.log("addCateg ---------------", res2);

    //  delete category 

    const res3 = categoryApi.deleteCateg("");
    console.log(" deleteCateg -------------", res3);
  }, []);

  //   Product Check

  //   useEffect(() => {
  // get product

  //     const res = productApi.getProduct(page.page, page.pageSize);
  //     console.log("getPro-------------",res);

  //  add product

  //     // const res2 = productApi.addProduct(product);
  //     // console.log("addPro-------------", res2);

  // delete product

  //     const res3 = productApi.deleteProduct(
  //       "f4ec6faf-4d8c-4c26-8b62-f3cdffb27cc9"
  //     );
  //     console.log("deletePro --------",res3);
  //   }, []);

  return <div>ApiCheck</div>;
};

export default ApiCheck;
