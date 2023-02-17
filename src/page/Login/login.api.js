import configureApi from "../../api";

const categoryEndpoints = {
  list: "/auth/login",
};

export const postLogin = async (params) =>
  await configureApi.post(categoryEndpoints.list, {
    params: {
      page: 1,
      pageSize: 10,
      ...params,
    },
  });

// export const RequestLogin = async (data) =>
//   await configureApi.post(categoryEndpoints.list, { data });

