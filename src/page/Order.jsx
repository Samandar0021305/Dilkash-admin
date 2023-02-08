import React, { useEffect } from 'react'
import { actions } from '../utils/actions'
import {fetchOrder} from "../redux/feature/OrderSlice"
import { useDispatch, useSelector } from 'react-redux'
const Order = React.memo(() => {
    const _page = "order"
    const {get} = actions(_page)
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.order.orders)

    const FetchingOrder = async()=>{
       const res = await get()
       return res
    }
 
    useEffect(()=>{
        FetchingOrder().then(value=>dispatch(fetchOrder(value.data)))
    })

    console.log(data)
  return (
    <>
    
    </>
  )
})

export default Order