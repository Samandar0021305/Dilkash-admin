import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";

import Modal from "../src/components/modal/Modal"


const Routers = React.lazy(() => import("./rootes/Index"));
const Layout = React.lazy(() => import("./Layout"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routers />
      </Layout>
    </Suspense>
  );
}

export default App;
