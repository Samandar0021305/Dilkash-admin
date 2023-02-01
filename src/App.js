import React from "react";
import Modal from "../src/components/modal/Modal"
// import Table from "./components/table/Table";

const Routers = React.lazy(() => import("./rootes/Index"));
const Layout = React.lazy(() => import("./Layout"));

function App() {
  return (
    <Layout>
      <Routers />
      {/* <Modal/> */}
    </Layout>
  );
}

export default App;
