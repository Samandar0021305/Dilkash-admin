import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";

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
