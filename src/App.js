import React from "react";
const Routers = React.lazy(()=>import("./rootes/Index"))

function App() {
  return (
    <>
    <Routers />
    </>
  );
}

export default App;
