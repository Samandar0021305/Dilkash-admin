import configureApi from "../api";

const categoryEndpoints = {
  list: "/category",
  add: "/category/create",
  updated: "/category/update/",
  delete: "/category/delete/",
};

export const getCategory = async (params) =>
  await configureApi.get(categoryEndpoints.list, {
    params: {
      page: 1,
      pageSize: 10,
      ...params,
    },
  });

export const createCategory = async (data) =>
  await configureApi.post(categoryEndpoints.add, { data });

export const deleteCategory = async (id) =>
  await configureApi.delete(categoryEndpoints.delete + id);

export const getByIdCategory = async (id) =>
  await configureApi.get(categoryEndpoints.list + id);

export const updateCategory = async (id, data) =>
  await configureApi.patch(categoryEndpoints.delete + id, { data });
