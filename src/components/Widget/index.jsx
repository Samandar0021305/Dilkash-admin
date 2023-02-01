import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryLits } from "../../utils/Constants";
import Modal from "../modal/Modal"

const index = React.memo(() => {
  const [list, setList] = useState(CategoryLits);
  const [isShown, setIsShown] = useState({ show: false, id: "" });


  const myModal = <Modal />

  const showModal = () => {
    // eslint-disable-next-line no-unused-expressions
    myModal.style.display = "block"
  }
  return (
    <div>
      <ul className="flex justify-between mt-[20px]">
        {list.map((val) => {
          return (
            <li
              className="flex mx-[10px] w-[250px] justify-between flex-1 shadow-md rounded-[10px] h-[130px]"
              style={{ backgroundImage: `url(${val.background})` }}
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
              {/* <Modal /> */}
              {isShown.show === true && isShown.id === val.id ? (
                <>
                  <span className="flex justify-between w-full h-full p-[10px] rounded-[10px] backdrop-blur-[10px]">
                    <span className="flex flex-col">
                      <span className="font-bold text-[14px] text-white">
                        {val.name}
                      </span>
                      <span className="text-[40px] font-[500] text-white">
                        {val.cout}
                      </span>
                      <Link
                        to="/"
                        className="w-max text-white text-[12px] border-b border-white"
                      >
                        {val.see}
                      </Link>
                    </span>
                    {/* <Modal /> */}
                    <span className="flex flex-col text-[#ebe4e4] items-center gap-[70px]">
                      <i
                        className={
                          val.edit +
                          " text-900 text-[14px] text-[#e5e2e2] cursor-pointer"
                        }
                      ></i>
                      <i
                        className={
                          val.delete +
                          " text-900 text-[17px] text-white cursor-pointer"
                        }
                        // eslint-disable-next-line no-restricted-globals
                        onClick={() => confirm("Are you sure you want to delete this category?")}
                      ></i>
                    </span>
                  </span>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default index;
