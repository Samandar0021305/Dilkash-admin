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
        name: "catogary-update-page",
        path: "category/action/:categoryId",
        component: React.lazy(() => import("../components/category/Category")),
      },
      {
        id: 1.2,
        name: "Category Product",
        path: "category/:categoryproductId",
        component: React.lazy(() =>
          import("../components/category/CategoryProduct/index")
        ),
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
        path: "foods/action/:productId",
        component: React.lazy(() => import("../components/product/Product")),
      },
    ],
  },
];
