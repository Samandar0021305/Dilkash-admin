import React,{Suspense,useMemo} from 'react'
import { Routes,Route } from 'react-router-dom'
import {routers} from "./RenderRouter"



const renderRoutesRecursive = () =>
      routers.map((val) =>
      val.children ? (
        renderRoutesRecursive(val.children)
      ) : (
        <Route
          key={val.id}
          path={val.path}
          element={<val.component/>}
        />
      ),
    )


const Index = React.memo(() => {
  const renderRoutes = useMemo(() => renderRoutesRecursive(routers), [routers])

  return (
    <>
     <Suspense fallback={<h1>Loading....</h1>}>
       <Routes>
          {renderRoutes}
       </Routes>
     </Suspense>
    </>
  )
})

export default Index
