import React, { useReducer, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import {CategoryLits} from "../../utils/Constants"



const index = React.memo(() => {
    const [list,setList] = useState(CategoryLits)
    const [idValue ,setIdValue] = useState([])
    const changeHandler  = (items)=>{
      setIdValue(p=>[...idValue,items])
    }

  return (
    <div>
        <ul className='flex justify-between mt-[20px]'>
            {list.map(val=>{
              if(!idValue.includes(val.id))
                return(<li className='flex mx-[10px] w-[250px] justify-between flex-1 p-[10px] shadow-md rounded-[10px] h-[110px]'  key={val.id}>
                    <span className='flex flex-col justify-between'>
                        <span className='font-bold text-[14px] text-[#A0A0A0]'>{val.name}</span>
                        <span className='text-[30px] font-[300]'>{val.cout}</span>
                        <Link  className='w-max	 text-[12px] border-b border-gray-900 '>{val.see}</Link>
                    </span>
                    <span className='flex flex-col items-center justify-between'>
                     <span>
                     <p  className='text-green-900 text-[14px] cursor-pointer' >{val.edit}</p>
                     <p onClick={()=>changeHandler(val.id)} className='text-red text-[14px] cursor-pointer'>{val.delete}</p>
                     </span>
                      <img className='p-[5px] bg-[#ff000099]  rounded-[5px] self-end w-[30px] h-[30px]' src={val.img} alt="" />
                    </span>
                </li>)
            })}
        </ul>
    </div>
  )
})
export default index
