import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../modules/food.api";
import { deleteProducts, fetchProducts } from "../redux/feature/productSlice";
import { productTableHeader } from "../utils/Constants";
import Table from "../components/table/TableItem";

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

  const deleteItem = (id) => {
    deleteProduct(id);
    dispatch(deleteProducts(id));
  };

  const columns = useMemo(() => productTableHeader);

  return (
    <div>
      <Table columns={columns} data={data} deleteItem={deleteItem} />
    </div>
  );
});

export default Foods;
