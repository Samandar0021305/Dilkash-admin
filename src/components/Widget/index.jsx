import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryLits } from "../../utils/Constants";

const index = React.memo(() => {
  const [list, setList] = useState(CategoryLits);
  const [isShown, setIsShown] = useState(false)
  return (
    <div>
      <ul className="flex justify-between mt-[20px]">
        {list.map((val) => {
          return (
            <li
              className="flex mx-[10px] w-[250px] justify-between flex-1 p-[10px] shadow-md rounded-[10px] h-[110px] "
              key={val.id}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
              <span className="flex flex-col justify-between">
                <span className="font-bold text-[14px] text-[#A0A0A0]">
                  {val.name}
                </span>
                <span className="text-[30px] font-[300]">{val.cout}</span>
                <Link className="w-max	 text-[12px] border-b border-gray-900 ">
                  {val.see}
                </Link>
              </span>
              <span className="flex flex-col items-center justify-between">
                <img
                  className="p-[5px] bg-[#ff000099]  rounded-[5px] self-end w-[30px] h-[30px]"
                  src={val.img}
                  alt=""
                />
                {isShown === true ? (
                <i
                  className={
                    val.edit + " text-green-900 text-[14px]"
                  }></i>
                ): null}
              </span>
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
