import React from "react";



import Navbar from "./components/navbar/Navbar"
const Routers = React.lazy(()=>import("./rootes/Index"))

function App() {
  return (
    <>
    <Navbar />
    <Routers />
    </>
  );
}

export default App;
