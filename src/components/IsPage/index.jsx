import React, { useContext } from 'react'
import { Context } from '../../Layout'
const Index = () => {
    const Int = useContext(Context).posts
   return (
    <div className='m-[10px]'>
        <h1><span className='text-blue-900 cursor-pointer underline'>Home</span> / {Int}</h1>
    </div>
  )
}

export default Index