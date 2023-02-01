import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../modules/category.api";
import { fetchCategories } from "../redux/feature/categorySlice";
import { fetchFood } from "../redux/feature/foodSlice";
import { getProduct } from "../modules/food.api";
const Widget = React.lazy(() => import("../components/Widget"));

const Category = React.memo(() => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.category.categories);
  // const dispatch = useDispatch()
  // const data = useSelector(state=>state.food.foods)

  const FectchData = useCallback(async () => {
    let data = await getCategory();
    return data;
  });

  const dataFerching = useCallback(() => {
    FectchData().then((val) => dispatch(fetchCategories(val.data)));
  });

  // const FetchData = async()=>{
  //  const res = await getProduct()
  //  return res
  // }

  // const FoodsData = useCallback(()=>{
  //   FetchData().then(res=>dispatch(fetchFood(res.data)))
  // })

  useEffect(() => {
    dataFerching();
  }, [dispatch]);

  return (
    <div className="w-full">
      <Widget value={value} />
    </div>
  );
});

export default Category;
