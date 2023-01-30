import firstFood from "../images/first-food.jpg";

export const sidebar = [
  {
    name: "Dashboard",
    icon: "fa-solid fa-house",

    path: "/dashboard",
  },
  {
    name: "Category",
    icon: "fa-solid fa-cart-shopping",
    path: "category",
  },
  {
    name: "Order",
    icon: "fa-solid fa-bag-shopping",
    path: "order",
  },
];

export const CategoryLits = [
  {
    id: 1,
    name: "Salatlar",
    cout: "20",
    see: "salatlarni ko'rish salat",
    edit: "fa-solid fa-pencil",
    delete: "fa-solid fa-trash",
    background: firstFood,
  },

  {
    id: 2,
    name: "Ichimliklar",
    cout: "14",
    see: "ichimliklarni ko'rish",
    edit: "fa-solid fa-pencil",
    delete: "fa-solid fa-trash",
    background: firstFood,
  },
  {
    id: 3,
    name: "Ovqatlar",
    cout: "34",
    see: "ovqatlarni ko'rish",
    edit: "fa-solid fa-pencil",
    delete: "fa-solid fa-trash",
    background: firstFood,
  },
];

export const categoryTableHeader = [
  {
    Header: "Catgory image",
    accessor: "image",
  },
  {
    Header: "Category name ",
    accessor: "title",
  },
  {
    Header: "Date",
    accessor: "created_at",
  },
  {
    Header: "Actions",
    accessor: "action",
  },
];

export const productTableHeader = [
  {
    accessor: "id",
  },
  {
    Header: "Image",
    accessor: "image",
  },
  {
    Header: "Name ",
    accessor: "name",
  },
  {
    Header: "Description ",
    accessor: "content",
  },
  {
    Header: "Price ",
    accessor: "price",
  },
  {
    Header: "Actions",
    accessor: "action",
  },
];
