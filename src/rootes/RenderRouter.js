import React from "react"
const Home = React.lazy(()=>import("../page/Home"))
const Foods = React.lazy(()=>import("../page/Foods"))
const Category = React.lazy(()=>import("../page/Category"))
export const routers = [
    {
        id:1,
        name:"catogary page",
        path:"category",
        component:Category
    },
    {
        id:2,
        name:"Home Dashboard",
        path:"/home",
        index:'index',
        component:Home,
        children:[]
    },
    {
        id:4,
        name:"Foods page",
        path:"foods",
        component:Foods
    },
]



