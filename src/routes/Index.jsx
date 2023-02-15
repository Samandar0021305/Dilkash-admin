import React, { Suspense, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderComponent from "../components/Loader/LoaderComponent";
import { routers } from "./RenderRouter";
const role = localStorage.getItem('role') ?? 'User'


const renderRoutesRecursive = (router) =>
  router.map((val) =>
    val.children && val.children.length ?  (
      <React.Fragment key={val.id}>
      {<Route key={val.id} path={val.path} element={<val.component />} /> }
      {renderRoutesRecursive(val.children)}
      </React.Fragment>
    ) : (
      <Route key={val.id} path={val.path} element={<val.component />} />
    )
  );

const Index = React.memo(() => {
  const renderRoutes = useMemo(() => renderRoutesRecursive(routers.filter((el)=>el.meta.roles.includes(role))), [routers]);
  

  return (
    <>
      <Suspense fallback={<LoaderComponent />}>

        <Routes>
          {renderRoutes}
          </Routes>
      </Suspense>
    </>
  );
});

export default Index;
