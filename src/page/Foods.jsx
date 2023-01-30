import React, { useEffect } from "react";
import Table from "../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../modules/food.api";
import { fetchProducts } from "../redux/feature/productSlice";
import { productTableHeader } from "../utils/Constants";

const Foods = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);
  console.log(data);

  const fetchProduct = async () => {
    const res = await getProduct();
    return res;
  };

  useEffect(() => {
    fetchProduct().then((res) => dispatch(fetchProducts(res.data)));
  }, [dispatch]);

  return (
    <div>
      <Table data={data} column={productTableHeader} />
    </div>
  );
});

export default Foods;
