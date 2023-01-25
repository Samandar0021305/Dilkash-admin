import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


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
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            </div>

            <div>
                <div className='flex p-10px '>
                    
                    <div className="ava" style={{ border: 'none', borderRadius: "100%", background: "purple", padding: "10px", color: "#FFFFFF" }}>GG</div>
                </div>
            </div>
            </nav>
        </>
    )
}
