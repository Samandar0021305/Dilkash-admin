import React,{useEffect,useMemo, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductByCategory } from '../../../modules/category.api'
import { deleteProduct } from '../../../modules/food.api'
import { getByProduct } from '../../../redux/feature/categorySlice'
import { deleteProducts } from '../../../redux/feature/productSlice'
import { productTableHeader } from '../../../utils/Constants'
const Table = React.lazy(()=>import("../../table/TableItem"))

const Index = () => {
  const params = useParams()
  
  const {productcategory} = useSelector((state)=>state.category)
 
  const dispatch = useDispatch()
  const fetchProductByCateg = async () => {
    if (params.categoryproductId) {
      const res = await getProductByCategory(params.categoryproductId);
      return res;
    }
  };
  useEffect(() => {
    fetchProductByCateg().then((res) => dispatch(getByProduct(res?.data.rows)));
  },[]);
  const deleteItem = (id) => {
    deleteProduct(id);
    dispatch(deleteProducts(id));
  };
  const columns = useMemo(() => productTableHeader);
  return (
    <div>
         <Table columns={columns} data={productcategory} deleteItem={deleteItem} />
    </div>
  )
}

export default Index