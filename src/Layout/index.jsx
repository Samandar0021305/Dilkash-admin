import React from 'react'
import Saidbar from "../components/sidebar/Sidebar"

const index = ({children}) => {
  return (
    <div className='flex'>
            <Saidbar/>
         <div className='ml-[10px]'>
            <nav></nav>
               <main>{children}</main>
            <footer></footer>
         </div>
    </div>
  )
}

export default index