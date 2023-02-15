import React from 'react'

const LayoutEelement = React.lazy(()=>import("./index"))
const Routers = React.lazy(()=>import("../routes/Index"))
const Layout = React.memo(() => {
  return (
      <LayoutEelement>
        <Routers />
      </LayoutEelement>
  )
})

export default Layout