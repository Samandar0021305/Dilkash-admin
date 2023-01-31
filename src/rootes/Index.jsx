import React, { Suspense, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import LoaderComponent from "../components/Loader/LoaderComponent";
import { routers } from "./RenderRouter";

const renderRoutesRecursive = (routers) =>
  routers.map((val) =>
    val.children && val.children.length ? (
      renderRoutesRecursive(val.children)
    ) : (
      <Route key={val.id} path={val.path} element={<val.component />} />
    )
  );

const Index = React.memo(() => {
  const renderRoutes = useMemo(() => renderRoutesRecursive(routers), [routers]);

  return (
    <>
      <Suspense fallback={<LoaderComponent />}>
        <Routes>{renderRoutes}</Routes>
      </Suspense>
    </>
  );
});

export default Index;
