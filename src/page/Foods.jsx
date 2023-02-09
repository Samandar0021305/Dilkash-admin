import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../modules/food.api";
import { fetchProducts } from "../redux/feature/productSlice";
import { productTableHeader } from "../utils/Constants";
import Table from "../components/table/TableItem";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { closeModal } from "../redux/feature/ModalSlice";
import { toast } from "react-toastify";
import LoaderComponent from "../components/Loader/LoaderComponent";

const Foods = React.memo(() => {
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, productId } = useSelector((state) => state.product);
  const modal = useSelector((state) => state.modal.show);
  const fetchProduct = async () => {
    const res = await getProduct();
    return res;
  };

  useEffect(() => {
    fetchProduct().then((res) => dispatch(fetchProducts(res.data)));
  }, [dispatch]);

  const deleteItem = () => {
    if (productId) {
      dispatch(closeModal("close"));
      deleteProduct(productId).then((res) => setStatus(res.statusCode));
    }
  };
  useEffect(() => {
    if (parseInt(status) === 200) {
      fetchProduct().then((res) => dispatch(fetchProducts(res.data)));
      toast.success("Product successfully deleted!");
      setStatus(0)
    } else if(parseInt(status) >= 400) {
      toast.error("Error, Product was not deleted!");
    }
  }, [status])

  const columns = useMemo(() => productTableHeader);

  return (
    <>
      {
        products.length ?   <div>
        <button
          onClick={() => navigate("create")}
          className="border p-2 w-[80px] rounded bg-cyan-600 text-white"
        >
          Add
        </button>
        <Table columns={columns} data={products} deleteItem={deleteItem} />
        {modal == "open" && <Modal deleteItem={deleteItem} />}
      </div> : <LoaderComponent />
      }
  
    </>
  );
});

export default Foods;
