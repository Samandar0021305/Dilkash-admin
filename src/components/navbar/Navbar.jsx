import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { words, navList, icons } from "./navbarContents/navbarContents"
import { Context } from '../../Layout';


export default function Navbar() {
  const toogle = useContext(Context).setToogle
  const isToogle = useContext(Context).isToogle
    const changeToogle = ()=>{
      toogle(!isToogle)
   }
    
    return (
        <>
            <nav className='flex justify-between'>
                <div className='flex justify-between gap-4 items-center'>

                    <ul className="flex justify-between items-end gap-4">
                        {navList.map(item => (
                            <div key={item.id}>
                            <FontAwesomeIcon  onClick={changeToogle} icon={item?.icon} className="mt-2.5 cursor-pointer text-gray-800 text-lg ml-15" />
                            </div>
                        ))}
                        {words.map(elem => (
                            <li key={elem.id}>
                                <NavLink className='hover:text-red-900 transition cursor-pointer'>{elem?.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className='flex gap-5 p-10px '>
                        {icons.map((items) => {
                            // console.log("type----",items)
                            return (
                                <div key={items?.id} className="flex">
                                    <FontAwesomeIcon icon={items?.icon} className="mt-2.5 cursor-pointer text-gray-800 text-lg ml-15" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </>
    )
}
