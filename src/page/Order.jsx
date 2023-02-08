import React, { useEffect ,useMemo,useState} from 'react'
import { actions } from '../utils/actions'
import {fetchOrder} from "../redux/feature/OrderSlice"
import { useDispatch, useSelector } from 'react-redux'
import LoaderComponent from '../components/Loader/LoaderComponent'
import Table from '../components/table/TableItem'
import { orderTableHeader } from '../utils/Constants'
import { closeModal } from '../redux/feature/ModalSlice'
import { fetchProducts } from '../redux/feature/productSlice'
import { toast } from 'react-toastify'

const Order = React.memo(() => {
    const _ = "order"
  const [status, setStatus] = useState();

    const {get,remove,getById} = actions(_)
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.order.orders)
    const fetchProduct = async()=>{
       const res = await get()
       return res
    }
 
    useEffect(()=>{
      fetchProduct().then(value=>dispatch(fetchOrder(value)))
    },[])
 

 const deleteItem = () => {
  if (getById) {
    dispatch(closeModal("close"));
    remove(getById).then((res) => setStatus(res.statusCode));
  }
};
useEffect(() => {
  if (parseInt(status) === 200) {
    fetchProduct().then((res) => dispatch(fetchProducts(res.data)));
    toast.success("Product successfully deleted!");
    setStatus(0)
  } else if(parseInt(status) >= 400) {
    toast.error("Error, Product was not deleted!");
  }
}, [status])

const columns = useMemo(() => orderTableHeader);

    
  return (
    <>
      {data.length ? <Table data={data} columns={columns} deleteItem={deleteItem}/> : <LoaderComponent />}
    </>
  )
})

export default Order