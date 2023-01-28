import React, {useState } from 'react'


const Widget = React.lazy(()=>import("../components/Widget"))
const CategoryUpdite = React.lazy(()=>import("../components/CategoryUpdite"))


const Category = React.memo(() => {
  
  return (
    <div>
        <Widget />
    </div>
  )
})

export default Category