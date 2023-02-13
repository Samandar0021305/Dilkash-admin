import React from "react";
// import Login from "./page/Login/Login"
const RouteEL = React.lazy(()=>import("./rootes"))

function App() {
  return (
    <>
    <RouteEL />
    {/* <Login /> */}
    </>
  );
}

export default App;
