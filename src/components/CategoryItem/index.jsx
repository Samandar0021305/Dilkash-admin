import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../modules/food.api'
import { fetchFood } from '../../redux/feature/foodSlice'
const Index = () => {
    let dispatch = useDispatch()
    let data = useSelector(state=>state.food.foods)
   
    const Fetching = useCallback(async()=>{
     let res = await getProduct()
     return res
    })
   
    const DataFetching = useCallback(()=>{
        Fetching().then(res=>dispatch(fetchFood(res.data)))
    })

    useEffect(()=>{
        DataFetching()
    },[dispatch])
    console.log(data);
  return (
    <div>

    </div>
  )
}

export default Index