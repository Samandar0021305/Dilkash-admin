
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProducts } from "../redux/feature/productSlice";
import { productTableHeader } from "../utils/Constants";
import Table from "../components/table/TableItem";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { closeModal } from "../redux/feature/ModalSlice";
import LoaderComponent from "../components/Loader/LoaderComponent";
import { actions } from "../utils/actions";
const _page = "product";

const Foods = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, productId } = useSelector((state) => state.product);
  const modal = useSelector((state) => state.modal.show);

  const { get,  remove } = actions(_page);

  const fetchProduct = async () => {
    const res = await get();
    return res;
  };

  useEffect(() => {
    fetchProduct().then((res) => dispatch(fetchProducts(res)));
  }, []);

  const deleteItem = () => {
    if (productId) {
      dispatch(closeModal("close"));
      remove(productId);
      dispatch(deleteProducts(productId));
    }
  };

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
