import React from "react"

const Home = React.lazy(() => import("../page/Home"))
const Foods = React.lazy(() => import("../page/Foods"))
const Category = React.lazy(() => import("../page/Category"))
const CategoryUpdite = React.lazy(() => import("../components/CategoryUpdite"))

export const routers = [
    {
        id: 1,
        name: "catogary page",
        path: "/category",
        component: Category,
    },
    {
        id: 2,
        name: "Home Dashboard",
        path: "/dashboard",
        index: 'index',
        component: Home,
    },
    {
        id: 4,
        name: "Foods page",
        path: "foods",
        component: Foods
    },
    {
        id:5,
        name: "catogary updite page",
        path: "category/updite",
        component: CategoryUpdite,
    },
]



