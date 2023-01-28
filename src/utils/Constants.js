import firstFood from "../images/first-food.jpg";

export const sidebar = [
  {
    name: "Home",
    icon: "fa-solid fa-house",
    path: "/",
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
