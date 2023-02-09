import React from "react";
export const routers = [
  {
    id: 1,
    name: "catogary page",
    path: "/category",
    component: React.lazy(() => import("../page/Category")),
    children: [
      {
        id: 1.1,
        name: "catogary update page",
        path: "category/update/:categoryId",
        component:React.lazy(() => import("../components/category/CategoryUpdite")) ,
      },
      {
        id: 1.2,
        name: "catogary add page",
        path: "category/add",
        component: React.lazy(() => import("../components/category/CategoryAdd")),
      },
      {
        id: 1.3,
        name: "Category Product",
        path: "category/:categoryproductId",
        component: React.lazy(() => import("../components/category/CategoryProduct/index"))
      },
    ],
  },

  {
    id: 2,
    name: "Home Dashboard",
    path: "/dashboard",
    index: "index",
    component: React.lazy(() => import("../page/Home")),
  },
  {
    id: 4,
    name: "Foods page",
    path: "foods",
    component: React.lazy(() => import("../page/Foods")),
    children: [
      {
        id: 4.1,
        name: "Foods page",
        path: "foods/create",
        component: React.lazy(() => import("../components/product/ProductCreate"))
      },
      {
        id: 4.2,
        name: "Foods page",
        path: "foods/update/:productId",
        component: React.lazy(() => import("../components/product/ProductEdit")),
      },
    ],
  },
];
