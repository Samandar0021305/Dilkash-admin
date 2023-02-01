import React, { useContext } from 'react'
import {useLocation} from 'react-router-dom'
const Index = () => {
    const location = useLocation()
    
   return (
    <div className='m-[10px]'>
        <h1><span className='text-blue-900 cursor-pointer underline'>Home</span> <span className='p-1 rounded cursor-pointer shadow'>{location.pathname}</span></h1>
    </div>
  )
}

export default Index