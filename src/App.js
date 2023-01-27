import React from "react";


import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar/Sidebar";
const Routers = React.lazy(()=>import("./rootes/Index"))

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
    <Routers />
    </>
  );
}

export default App;
