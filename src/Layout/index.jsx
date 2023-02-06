import React, { useReducer } from 'react'
import Sidebar from "../components/Sidebar/Sidebar"

const Navbar = React.lazy(()=>import("../components/navbar/Navbar"))
const Footer = React.lazy(()=>import("../components/footer/Footer"))
const IsPage =  React.lazy(()=>import("../components/IsPage"))
let initialValue = true
export  const Context = React.createContext()

const reducerFunction = (state,action)=>{
   switch(action){
      case true:
         return true
      case false:
         return false

     default : return state
   }
}

const Index = ({children}) => {
   const [isToogle,setToogle] = useReducer(reducerFunction,initialValue)
  return (
   <Context.Provider value={{setToogle:setToogle,isToogle:isToogle}}>
     <div className='flex'>
          <Sidebar /> 
         <div className='ml-[10px] w-[100%] pr-[10px]'>
            <Navbar />
            <IsPage/>
               <main className='min-h-[86.5vh]'>{children}</main>
            <Footer />
         </div>
    </div>
   </Context.Provider>
  )
}

export default Index