import React,{Suspense} from 'react'
import { Routes,Route } from 'react-router-dom'
import {routers} from "./RenderRouter"



const Index = React.memo(() => {
  const useRoute = [
    ...routers.map(x=>({
      id:x.id,
      name:x.name,
      path:x.path,
      component:x.component
    }))
  ]
  return (
    <>
     <Suspense fallback={<h1>Loading....</h1>}>
       <Routes>
          {
            useRoute.map((x)=>x.component && (
             <Route index key={x.id} path={x.path} element={<x.component/>} />
            ))
          }
       </Routes>
     </Suspense>
    </>
  )
})

export default Index
