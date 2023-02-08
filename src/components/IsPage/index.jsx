import React, { useContext } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
const Index = () => {
    const location = useLocation()
     let DynmaicRouter = location.pathname.split("/")
     DynmaicRouter.shift()
      DynmaicRouter = ["home",...DynmaicRouter]
      if(DynmaicRouter.length == 2 && DynmaicRouter[1] == 'home' || DynmaicRouter[1] == 'Home')
      DynmaicRouter.pop()
   return (
    <div className='m-[10px] flex'>
      {DynmaicRouter.map((val,i)=>{
        return(
         <h1  key={i}> 
          <NavLink to={val} className='p-1 rounded cursor-pointer shadow'>{i==2 ? "children" : val}</NavLink>
        </h1>
        )
      })}
        
    </div>
  )
}

export default Index