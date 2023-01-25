import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {buttons, words, icons} from "../navbarContents/navbarContents"


export default function Navbar() {
    return (
        <>
            {/* <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}><MenuIcon /></Button>
                <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}>Dashboard</Button>
                <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}>Users</Button>
                <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}>Setting</Button>
            </div>

            <div>
                <div className="search" style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                    <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}><NotificationsNoneIcon /></Button>
                    <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}><FormatListBulletedIcon /></Button>
                    <Button style={{ border: "none", color: "#000000", background: "#FFFFFF" }}><DraftsOutlinedIcon /></Button>
                    <div className="ava" style={{ border: 'none', borderRadius: "100%", background: "purple", padding: "10px", color: "#FFFFFF" }}>GG</div>
                </div>
            </div>
            </nav> */}
            <nav className='flex justify-between'>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                {buttons.map((items) => {
                    return (
                        <div className="flex justify-between ">
                        <FontAwesomeIcon icon={items.icons} className="flex justify-between cursor-pointer text-lg"/>
                      </div>
                    )
                })}
                {words.map((items) => {
                    return (
                        <div className="flex">
                            <p className='flex justify-between text-xl cursor-pointer ml-15px'>{items.name}</p>
                      </div>
                    )
                })}
            </div>

            <div>
                <div className='flex p-10px '>
                {icons.map((items) => {
                    return (
                        <div className="flex">
                        <FontAwesomeIcon icon={items.icon} className="mt-2.5 cursor-pointer text-gray-800 text-lg ml-15"/>
                        
                      </div>
                    )
                })}
                </div>
            </div>
            </nav>
        </>
    )
}
