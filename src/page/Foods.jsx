import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProducts } from "../redux/feature/productSlice";
import { productTableHeader } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { closeModal } from "../redux/feature/ModalSlice";
import { actions } from "../utils/actions";
import Pagination from "../components/pagination/Paginations";
import Table2 from "../components/table/Table";
const _page = "product";

const Foods = React.memo(() => {
  const [pagination, setPagination] = useState({ page: 1, pageSize: 5 });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, productId } = useSelector((state) => state.product);
  const modal = useSelector((state) => state.modal.show);

  const { get, remove } = actions(_page);

  const fetchProduct = async () => {
    const res = await get({ ...pagination });
    return res;
  };

  useEffect(() => {
    fetchProduct().then((res) => dispatch(fetchProducts(res)));
  }, [pagination.page, pagination.pageSize]);

  const deleteItem = () => {
    if (productId) {
      dispatch(closeModal("close"));
      remove(productId);
      dispatch(deleteProducts(productId));
    }
  };

  const columns = useMemo(() => productTableHeader);

  const paginationHandler = (page) => {
    setPagination((prev) => ({
      ...prev,
      page: page,
    }));
  };
  const handleChange = (pageSize) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: pageSize,
    }));
  };

  return (
    <div className=" container flex flex-col">
      <button
        onClick={() => navigate("action/new")}
        className="border p-2 w-[80px] ml-auto mr-[65px] rounded bg-blue-600 text-white"
      >
        +
      </button>
      <Table2 columns={columns} data={products} />
      <Pagination
        page={pagination.page}
        paginationHandler={paginationHandler}
        handleChange={handleChange}
      />
      {modal == "open" && <Modal deleteItem={deleteItem} />}
    </div>
  );
});

export default Foods;
