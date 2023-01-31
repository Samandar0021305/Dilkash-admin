import configureApi from "../api";

const foodEndpoints = {
  list: "/product",
  add: "/product/create",
  updated: "/product/update/",
  delete: "/product/delete/",
};

export const getProduct = async (params) =>
  await configureApi.get(foodEndpoints.list, {
    params: {
      page: 1,
      pageSize: 10,
      ...params,
    },
  });

 export const PostProduct = async (value)=>{
   await configureApi.post(foodEndpoints.list,value)
 } 

export const createProduct = async (data) =>
  await configureApi.post(foodEndpoints.add, { data });

export const deleteProduct = async (id) =>
  await configureApi.delete(foodEndpoints.delete + id);

export const getByIdProduct = async (id) =>
  await configureApi.get(foodEndpoints.list + id);

export const updateProduct = async (id, data) =>
  await configureApi.delete(foodEndpoints.delete + id, { data });
