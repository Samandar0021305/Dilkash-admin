import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttons, words, icons } from "./navbarContents/navbarContents"


export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between'>
                <div className='flex justify-between gap-4 items-center'>
                    {buttons.map((items) => {
                        return (
                            <div >
                                <FontAwesomeIcon icon={items.icons} className="cursor-pointer text-lg" />
                            </div>
                        )
                    })}
                    {words.map((items) => {
                        return (
                            <div>
                                <p className="flex justify-between text-xl cursor-pointer">{items.name}</p>
                      </div>
                    )
                })}
            </div>

            <div>
                <div className='flex gap-5 p-10px '>
                {icons.map((items) => {
                    return (
                        <div className="flex">
                                <FontAwesomeIcon icon={items.icon} className="mt-2.5 cursor-pointer text-gray-800 text-lg ml-15" />

                            </div>
                        )
                    })}
                </div>
            </div>
        </nav>
        </>
    )
}
