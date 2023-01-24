import React from 'react'
import { Routes,Route } from 'react-router-dom'

const Home = React.lazy(()=>import("../page/Home"))
const Foods = React.lazy(()=>import("../page/Foods"))

const index = React.memo(() => {
  return (
    <React.Fragment>
      <Routes>
         <Route  path='/' element={<React.Suspense fallback="loading...."><Home/></React.Suspense>}/>
         <Route path="food" element={<Foods/>}>
          <Route  path=':foodId' />
         </Route>
      </Routes>
    </React.Fragment>
  )
})

export default index