import React, { useCallback, useEffect, useState } from "react";
import { getCategory } from "../../modules/category.api";
import { useSelector,useDispatch } from "react-redux";
import {fetchCategories} from "../../redux/feature/categorySlice";
import CategoryItem from "../CategoryItem"

const index = React.memo(() => {
  const [list, setList] = useState(false);
  const [isShown, setIsShown] = useState({ show: false, id: "" });
  const dipatch = useDispatch()
  const value = useSelector(state=>state.category.categories)
  
  const FectchData = useCallback(async()=>{
   let data = await getCategory()
   return data
  })

  const dataFerching = useCallback(()=>{
     FectchData().then(val=>dipatch(fetchCategories(val.data)))
  })
  useEffect(()=>{
    dataFerching()
    setList(p=>!p)
  },[])
  // console.log(value);
  const baseIMG = process.env.REACT_APP_IMG_URL



  return (
    <div>
       <div className="mb-[10px] flex justify-end">
       <button className="bg-blue-500 hover:bg-blue-700 mr-[30px] text-white font-bold py-2 px-4 rounded">
           add
       </button>

       </div>
       <div className="flex flex-wrap  items-center">
          {list  ? <h1>Loading</h1> : 
          value.map(val=>{
            return   <div className="flex mx-[20px] my-[10px] w-[210px] justify-between  shadow-md rounded-[10px] h-[130px]"
            style={{ backgroundImage: `url(${baseIMG}${val.image})`}}
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
                      <h2  className="cursor-pointer text-[21px] hover:opacity-70 transition ml-[7px] mr-[15px] text-[#f00]">{val.title}</h2>
                    </span>
                    <span className="flex flex-col text-[#ebe4e4] items-center gap-[70px]">
                      <i
                        className="fa-solid fa-pencil text-900 text-[14px] text-[#e5e2e2] cursor-pointer"></i> 
                       <i 
                        className="fa-solid fa-trash text-900 text-[17px] text-white cursor-pointer"
                      ></i>
                    </span>
                  </span>
            ) : null}
          </div>
          })}
       </div>

       <CategoryItem />
    </div>
  );
});

export default index;
