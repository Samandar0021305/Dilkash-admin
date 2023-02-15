
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
import Modal from '../components/modal/Modal'
const _page = "order"

const Order = React.memo(() => {
  const [status, setStatus] = useState();
  const {get,remove} = actions(_page)
  const dispatch = useDispatch()
  const {orders , ordersId} = useSelector((state)=>state.order)
  const modal = useSelector((state) => state.modal.show);
    const fetchProduct = async()=>{
       const res = await get()
       return res
    }
 
    useEffect(()=>{
      fetchProduct().then(value=>dispatch(fetchOrder(value)))
    },[])
 

 const deleteItem = () => {
  if (ordersId) {
    dispatch(closeModal("close"));
    remove(ordersId).then((res) => setStatus(res.statusCode));
  }
};


useEffect(() => {
  if (parseInt(status) === 200) {
    fetchProduct().then((res) => dispatch(fetchProducts(res.data)));
    toast.success("order successfully deleted!");
    setStatus(0)
  } else if(parseInt(status) >= 400) {
    toast.error("Error, order was not deleted!");
  }
}, [status])


const columns = useMemo(() => orderTableHeader);

  return (
    <>
      {
      orders.length ? <>
       <Table order="order" data={orders} columns={columns} deleteItem={deleteItem}/> 
       {modal == "open" && <Modal deleteItem={deleteItem} />}
       </> : 
       <LoaderComponent />
       }
    </>
  )
})

export default Order