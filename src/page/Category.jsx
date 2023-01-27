import React from 'react'


const Widget = React.lazy(()=>import("../components/Widget"))
const Category = React.memo(() => {
  return (
    <div>
        <Widget/>
    </div>
  )
})

export default Category