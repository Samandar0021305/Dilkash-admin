import configureApi from "../api";

const OrderEndpoints = {
  list: "/order",
  add: "/order/create",
  updated: "/order/update/",
  delete: "/order/delete/",
};

export const getOrder = async (params) =>
  await configureApi.get(OrderEndpoints.list, {
    params: {
      page: 1,
      pageSize: 10,
      ...params,
    },
  });


export const createOrder = async (data) =>
  await configureApi.post(OrderEndpoints.add, { data });

export const deleteOrder = async (id) =>
  await configureApi.delete(OrderEndpoints.delete + id);

export const updateOrder = async (id, data) =>
  await configureApi.delete(OrderEndpoints.delete + id, { data });
