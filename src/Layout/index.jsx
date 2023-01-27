import React from 'react'
import Saidbar from "../components/Sidebar/Sidebar"

const Navbar = React.lazy(()=>import("../components/navbar/Navbar"))
const Footer = React.lazy(()=>import("../components/footer/Footer"))
const index = ({children}) => {
  return (
    <div className='flex'>
            <Saidbar/>
         <div className='ml-[10px]'>
            <Navbar  />
               <main className='min-h-[92vh]'>{children}</main>
            <Footer />
         </div>
    </div>
  )
}

export default index