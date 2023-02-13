
import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Modal from "../src/components/modal/Modal"


const Routers = React.lazy(() => import("./routes/Index"));
const Layout = React.lazy(() => import("./Layout"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routers />
        {/* <Modal /> */}
      </Layout>
    </Suspense>
  )
}
export default App;
