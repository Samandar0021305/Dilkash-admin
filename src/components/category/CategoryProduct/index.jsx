import React,{useEffect,useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getByProduct } from '../../../redux/feature/categorySlice'
import { deleteProducts } from '../../../redux/feature/productSlice'
import { actions } from '../../../utils/actions'
import { productTableHeader } from '../../../utils/Constants'
const Table = React.lazy(()=>import("../../table/TableItem"))
const _page = 'products'


const Index = () => {
  const params = useParams()  
  const {productcategory} = useSelector((state)=>state.category)
 const {get} = actions(_page)
  const dispatch = useDispatch()
  const fetchProductByCateg = async () => {
    if (params.categoryproductId) {
      const res = await get(params.categoryproductId);
      return res;
    }
  };
  useEffect(() => {
    fetchProductByCateg().then((res) => dispatch(getByProduct(res?.data.rows)));
  },[]);
  const deleteItem = (id) => {
    // deleteProduct(id);
    // dispatch(deleteProducts(id));
  };
  const columns = useMemo(() => productTableHeader);
  return (
    <div>
         <Table columns={columns} data={productcategory} deleteItem={deleteItem} />
    </div>
  )
}

export default Index