
import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Modal from "../src/components/modal/Modal"
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login"

const Layout = React.lazy(() => import("./Layout/Layout"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Login/>} path='/login' />
        <Route  path="/" element={<Layout/>} />
      </Routes>
       
    </Suspense>
  )
}
export default App;
