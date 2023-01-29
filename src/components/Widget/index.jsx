import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Layout'
import {CategoryLits} from "../../utils/Constants"

const index = React.memo(() => {
  const disp = useContext(Context).dispatch
  const navigate = useNavigate()
    const [list,setList] = useState(CategoryLits)
    const handlerUpdite = (item)=>{   
       navigate('updite')
      //  disp(item)
    } 
    return (
    <div>
        <ul className='flex justify-between mt-[20px]'>
            {list.map(val=>{
                return(<li className='flex mx-[10px] w-[250px] justify-between flex-1 p-[10px] shadow-md rounded-[10px] h-[110px]'  key={val.id}>
                    <span className='flex flex-col justify-between'>
                        <span className='font-bold text-[14px] text-[#A0A0A0]'>{val.name}</span>
                        <span className='text-[30px] font-[300]'>{val.cout}</span>
                        <a className='w-max	 text-[12px] border-b border-gray-900 '>{val.see}</a>
                    </span>
                    <span className='flex flex-col items-center justify-between'>
                      <p onClick={()=>handlerUpdite(val)} className='text-green-900 cursor-pointer text-[14px]' >{val.edit}</p>
                      <img className='p-[5px] bg-[#ff000099]  rounded-[5px] self-end w-[30px] h-[30px]' src={val.img} alt="" />
                    </span>
                </li>)
            })}
        </ul>
    </div>
  )
})

export default index