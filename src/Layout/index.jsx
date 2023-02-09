<<<<<<< HEAD
import React, { useReducer } from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
=======
import React from 'react'
import Saidbar from "../components/Sidebar/Sidebar"
import Navbar from "../components/navbar/Navbar"
>>>>>>> 0eaada37dcc6804e72afc326465d180b0186bae1

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
<<<<<<< HEAD
   <Context.Provider value={{setToogle:setToogle,isToogle:isToogle}}>
     <div className='flex'>
          <Sidebar /> 
         <div className='ml-[10px] w-[100%] pr-[10px]'>
            <Navbar />
            <IsPage/>
               <main className='min-h-[86.5vh]'>{children}</main>
            <Footer />
=======
    <div className='flex'>
            <Saidbar/>
         <div className='ml-[10px]'>
            <nav><Navbar/></nav>
               <main>{children}</main>
            <footer></footer>
>>>>>>> 0eaada37dcc6804e72afc326465d180b0186bae1
         </div>
    </div>
   </Context.Provider>
  )
}

export default Index