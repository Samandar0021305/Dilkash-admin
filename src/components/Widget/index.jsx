import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { openModal } from "../../redux/feature/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory ,getByProductId} from "../../redux/feature/categorySlice";

const index = React.memo(({ data, deleteItem }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.show);
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState({ show: false, id: "" });
  const baseIMG = process.env.REACT_APP_IMG_URL;

  const handlerAdd = () => {
    navigate("action/new");
  };

  return (
    <>
    {data.length ? <div>
      <div className="mb-[10px] flex justify-end">
        <button
          onClick={handlerAdd}
          className="bg-blue-500 hover:bg-blue-700 mr-[30px] text-white font-bold py-2 px-4 rounded"
        >
          add
        </button>
      </div>
      <div className="flex flex-wrap  items-center">
        {data.length   ? (
          data.map((val) => {
            return (
              <div
                className="flex mx-[20px] my-[10px] w-[210px] justify-between  shadow-md rounded-[10px] h-[130px]"
                style={{ backgroundImage: `url(${baseIMG}${val.image})` }}
                key={val.id}
                onMouseEnter={() => {
                  setIsShown((prev) => ({ ...prev, show: true, id: val.id }));
                }}
                onMouseLeave={() => {
                  setIsShown((prev) => ({
                    ...prev,
                    show: false,
                    id: val.id,
                  }));
                }}
              >
                {isShown.show === true && isShown.id === val.id ? (
                  <span className="flex justify-between w-full h-full p-[10px] rounded-[10px] backdrop-blur-[10px]">
                    <span className="flex justify-center items-center">
                      <h2
                        onClick={() => {
                          dispatch(getByProductId(val.id));
                          navigate(val.id);
                        }}
                        className="cursor-pointer text-[21px] hover:opacity-70 transition ml-[7px] mr-[15px] text-[#f00]"
                      >
                        {val.title}
                      </h2>
                    </span>
                    <span className="flex flex-col text-[#ebe4e4] items-center gap-[70px]">
                      <i
                        onClick={() => navigate(`action/${val.id}`)}
                        className="fa-solid fa-pencil text-900 text-[14px] text-[#e5e2e2] cursor-pointer"
                      ></i>
                      <i
                        onClick={() => {
                          dispatch(openModal("open"));
                          dispatch(deleteCategory(val.id));
                        }}
                        className="fa-solid fa-trash text-900 text-[17px] text-white cursor-pointer"
                      ></i>
                    </span>
                  </span>
                ) : null}
              </div>
            );
          })
        )
      : (
        <h1>Loading...</h1>
      )}
      </div>
      {modal == "open" && <Modal deleteItem={deleteItem} />}
    </div> : ""}
    </>
  );
});

export default index;
