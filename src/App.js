import React from "react";
import Table from "./components/table/Table";

const Routers = React.lazy(() => import("./rootes/Index"));
const Layout = React.lazy(() => import("./Layout"));

function App() {
  return (
    <Layout>
      <Routers />
    </Layout>
  );
}

export default App;
