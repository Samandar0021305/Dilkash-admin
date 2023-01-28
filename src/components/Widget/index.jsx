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
                  <span className="flex flex-col justify-between w-full h-full p-[10px] rounded-[10px] backdrop-blur">
                    <span className="font-bold text-[14px] text-[#A0A0A0]">
                      {val.name}
                    </span>
                    <span className="text-[40px] font-[500] text-[#fff]">
                      {val.cout}
                    </span>
                    <Link className="w-max	 text-[12px] border-b border-gray-900">
                      {val.see}
                    </Link>
                  </span>
                  <span className="flex flex-col items-center gap-[70px]">
                    <i
                      className={
                        val.edit +
                        " text-900 text-[14px] text-black cursor-pointer"
                      }></i>
                    <i
                      className={
                        val.delete +
                        " text-900 text-[17px] text-black cursor-pointer"
                      }></i>
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
