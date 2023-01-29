import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryLits } from "../../utils/Constants";

const index = React.memo(() => {
  const [list, setList] = useState(CategoryLits);
  const [isShown, setIsShown] = useState({ show: false, id: "" });

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
              }}>
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
                      <Link className="w-max text-white text-[12px] border-b border-white">
                        {val.see}
                      </Link>
                    </span>
                    <span className="flex flex-col text-[#ebe4e4] items-center gap-[70px]">
                      <i
                        className={
                          val.edit +
                          " text-900 text-[14px] text-[#e5e2e2] cursor-pointer"
                        }></i>
                      <i
                        className={
                          val.delete +
                          " text-900 text-[17px] text-white cursor-pointer"
                        }></i>
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

// font-size: 18px;
//       padding: 5px;
//       border-radius: 5px;
//       align-self: flex-end;

export default index;
