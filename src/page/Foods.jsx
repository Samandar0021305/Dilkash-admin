import React from 'react'
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom"
const Foods = (props) => {
  const {foodId} = useParams()
  return (
    <>
    welcome to

    <Outlet />
    </>
  )
}

export default Foods