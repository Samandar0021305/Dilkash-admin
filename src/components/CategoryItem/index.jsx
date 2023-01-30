import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../modules/food.api'
import { fetchFood } from '../../redux/feature/foodSlice'
const Index = () => {
    let dispatch = useDispatch()
    let data = useSelector(state=>state.food.foods)
   
    const Fetching = async()=>{
     let res = await getProduct()
     return res
    }

    useEffect(()=>{
      Fetching().then(res=>dispatch(fetchFood(res.data)))
    },[dispatch])
   
  return (
    <div>

    </div>
  )
}

export default Index