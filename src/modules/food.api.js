import configureApi from "../api";

const foodEndpoints = {
  list: "/product",
  add: "/product/create",
  updated: "/product/update/",
  delete: "/product/delete/",
  uploads: "/upload/create",
};

export const getProduct = async (params) =>
  await configureApi.get(foodEndpoints.list, {
    params: {
      page: 1,
      pageSize: 10,
      ...params,
    },
  });

export const createProduct = async (data) =>
  await configureApi.post(foodEndpoints.add, { data });

export const deleteProduct = async (id) =>
  await configureApi.delete(foodEndpoints.delete + id);

export const getByIdProduct = async (id) =>
  await configureApi.get(foodEndpoints.list + id);

export const updateProduct = async (id, data) =>
  await configureApi.delete(foodEndpoints.delete + id, { data });

export const uploadCreate = async (data) => {
  let formData = new FormData()
  formData.append("data", data);
  // console.log(data)
  // for (let [key, value] in formData) {
  //   console.log(`${key} =${value}`, )
  // }
  // // console.log(formData)
  const itemData = await configureApi({
    url: foodEndpoints.uploads,
    method: "POST",
    data: formData
  });
  return itemData;
  // const itemdata  = await fetch( `https://api.dilkash.itechcompany.uz/api/v1/${foodEndpoints.uploads}`, {
  //   method: "POST",
  //   body: formData
  // })
};
