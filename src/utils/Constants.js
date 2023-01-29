import Salad from "../assets/svg/salad.svg";

export const sidebar = [
  {
    name: "Dashboard",
    icon: "fa-solid fa-house",

    path: "/dashboard"
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
    img: Salad,
    edit: "edit",
  },

  {
    id: 2,
    name: "ichimliklar",
    cout: "14",
    see: "ichimliklarni ko'rish",
    img: Salad,
    edit: "edit",
  },
  {
    id: 3,
    name: "ovqatlar",
    cout: "34",
    see: "ovqatlarni ko'rish",
    img: Salad,
    edit: "edit",
  },
];

export const CategoryTableHeader = [
  {
    Header: "Cetagory Image",
    accessor: "cetagoryImage",
  },
  {
    Header: "Cetagory Name",
    accessor: "cetagoryName",
  },
  {
    Header: "CreatedDate",
    accessor: "date",
  },
  {
    Header: "Actions",
    accessor: "actions",
    delete: true,
    edit: true,
    deatils: false,
  },
];
