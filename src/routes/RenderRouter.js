import React from "react";

const Home = React.lazy(() => import("../page/Home"));
const Foods = React.lazy(() => import("../page/Foods"));
const Category = React.lazy(() => import("../page/Category"));
const CategoryUpdite = React.lazy(() => import("../components/category/Category"));
const categoryId = React.lazy(()=>import("../components/category/CategoryProduct"))
const ProductCreate = React.lazy(() =>
  import("../components/product/Product")
);

const ProductEdit = React.lazy(() =>
  import("../components/product/Product")
);
const Order = React.lazy(()=>import("../page/Order"))

export const routers = [
  {
    id: 1,
    name: "catogary page",
    path: "/category",
    component: Category,
    meta:{roles:['User','admin','operator']},
    component: React.lazy(() => import("../page/Category")),
    children: [
      {
        id: 1.1,
        name: "catogary-update-page",
        path: "category/action/:categoryId",
        component: CategoryUpdite,
      },
      {
        id: 1.2,
        name: "Category Product",
        path: "category/:categoryproductId",
        component: categoryId
      },
    ],
  },

  {
    id: 2,
    name: "Home Dashboard",
    path: "/dashboard",
    index: "index",
    component: Home,
    meta:{roles:['User','admin','operator']},
  },
  {
    id: 4,
    name: "Foods page",
    path: "foods",
    component: Foods,
    meta:{roles:['User','admin','operator']},
    children:[
      {
        id: 4.1,
        name: "Foods page",
        path: "foods/create",
        component: ProductCreate,
      },
      {
        id: 4.2,
        name: "Foods page",
        path: "foods/update",
        component: ProductEdit,
      },
    ]
  },
  
  {
    id: 5,
    name: "Order page",
    path: "order",
    component: Order,
    meta:{roles:['User','admin','operator']},
    children: [
      {
        id: 4.1,
        name: "Foods page",
        path: "foods/action/:productId",
        component: React.lazy(() => import("../components/product/Product")),
      },
    ],
  },
];
