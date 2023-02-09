import React from "react";

const Home = React.lazy(() => import("../page/Home"));
const Foods = React.lazy(() => import("../page/Foods"));
const Category = React.lazy(() => import("../page/Category"));
const CategoryUpdite = React.lazy(() => import("../components/CategoryUpdite"));
const CategoryAdd = React.lazy(() => import("../components/CategoryAdd"));
const ProductCreate = React.lazy(() =>
  import("../components/product/ProductCreate")
);
const CategoryProduct = React.lazy(() =>
  import("../components/CategoryProduct")
);
const ProductEdit = React.lazy(() =>
  import("../components/product/ProductEdit")
);
const Order = React.lazy(()=>import("../page/Order"))

export const routers = [
  {
    id: 1,
    name: "catogary page",
    path: "/category",
    component: Category,
    children: [
      {
        id: 1.1,
        name: "catogary updite page",
        path: "category/updite",
        component: CategoryUpdite,
      },
      {
        id: 1.2,
        name: "catogary add page",
        path: "category/add",
        component: CategoryAdd,
      },
      {
        id: 1.3,
        name: "Category Product",
        path: "category/:categoryproductId",
        component: CategoryProduct,
      },
    ],
  },

  {
    id: 2,
    name: "Home Dashboard",
    path: "/dashboard",
    index: "index",
    component: Home,
  },
  {
    id: 4,
    name: "Foods page",
    path: "foods",
    component: Foods
  },
  {
    id: 5,
    name: "Foods page",
    path: "foods/create",
    component: ProductCreate,
  },
  {
    id: 6,
    name: "Foods page",
    path: "foods/update",
    component: ProductEdit,
  },
  {
    id: 7,
    name: "Order page",
    path: "order",
    component: Order,
  },
];
