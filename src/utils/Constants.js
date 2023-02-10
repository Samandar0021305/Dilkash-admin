import firstFood from "../images/first-food.jpg";

export const sidebar = [
  {
    name: "Dashboard",
    icon: "fa-solid fa-house",
    path: "/dashboard",
    meta:{roles:['User','admin','operator']},
  },
  {
    name: "Category",
    icon: "fa-solid fa-cart-shopping",
    path: "category",
    meta:{roles:['User','admin','operator']},
  },
  {
    name: "Order",
    icon: "fa-solid fa-bag-shopping",
    path: "order",
    meta:{roles:['User','admin','operator']},
  },
  {
    name: "Foods",
    icon: "fa-solid fa-bowl-food",
    path: "foods",
    meta:{roles:['User','admin','operator']},
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


export const productTableHeader = [
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



export const orderTableHeader = [
  
  {
    Header: "Overall price ",
    accessor: "overall_price",
  },
  {
    Header: "Address ",
    accessor: "address",
  },
  {
    Header: "status",
    accessor: "status",
  },
  {
    Header: "phone number",
    accessor: "phone_number",
  },
  {
    Header: "Actions",
    accessor: "action",
  },
];
