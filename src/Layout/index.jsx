import React, { useState } from 'react'
import Saidbar from "../components/Sidebar/Sidebar"

const Navbar = React.lazy(()=>import("../components/navbar/Navbar"))
const Footer = React.lazy(()=>import("../components/footer/Footer"))

let initialValue = true
const Index = ({children}) => {
   const [isPage,setIsPage] = useState(initialValue)
  return (
    <div className='flex'>
            { isPage && <Saidbar/> }
         <div className='ml-[10px] w-[100%] pr-[10px]'>
            <Navbar   setIsPage={setIsPage}/>
               <main className='min-h-[92vh]'>{children}</main>
            <Footer />
         </div>
    </div>
  )
}

export default Index