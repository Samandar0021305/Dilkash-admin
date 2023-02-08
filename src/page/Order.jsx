import React, { useEffect } from 'react'
import { actions } from '../utils/actions'
import {fetchOrder} from "../redux/feature/OrderSlice"
import { useDispatch, useSelector } from 'react-redux'
import LoaderComponent from '../components/Loader/LoaderComponent'
import Table from '../components/table/TableItem'

const Order = React.memo(() => {
    const _ = "order"
    const {get} = actions(_)
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.order.orders)
    const FetchingOrder = async()=>{
       const res = await get()
       return res
    }
 
    useEffect(()=>{
        FetchingOrder().then(value=>dispatch(fetchOrder(value)))
    },[])

    
  return (
    <>
      {data.length ? "<Table data={data} />" : <LoaderComponent />}
    </>
  )
})

export default Order