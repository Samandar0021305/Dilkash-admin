import React from 'react'
import Saidbar from "../components/Sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"

const index = ({children}) => {
  return (
    <div className='flex'>
            <Saidbar/>
         <div className='ml-[10px]'>
            <nav><Navbar/></nav>
               <main>{children}</main>
            <footer></footer>
         </div>
    </div>
  )
}

export default index