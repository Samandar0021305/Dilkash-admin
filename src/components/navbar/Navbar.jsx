import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { words, navList, icons } from "./navbarContents/navbarContents"

export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between'>
                <div className='flex justify-between gap-4 items-center'>

                    <ul className="flex justify-between items-end gap-4">
                        {navList.map(item => (
                            <div key={item.id}>
                            <FontAwesomeIcon icon={item?.icon} className="mt-2.5 cursor-pointer text-gray-800 text-lg ml-15" />
                            </div>
                        ))}
                        {words.map(elem => (
                            <li key={elem.id}>
                                <a>{elem?.name}</a>
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
