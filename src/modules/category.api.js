import configureApi from "../api";

const categoryEndpoints = {
  list: "/category",
  getOne: (categId) => `/category/${categId}`,
  add: "/category/create",
  updated: (categId) => `/category/update/${categId}`,
  delete: (categId) => `/category/delete/${categId}`,
  pagination: (page, pageSize) => `/category?page=${page}&pageSize=${pageSize}`,
};

const categoryApi = {
  getCategory: async (params) => {
    console.log("params -------------", params);
    try {
      const response = await configureApi.get(categoryEndpoints.list, {
        params: { ...params },
      });
      return response;
    } catch (error) {
      return error;
    }
  },
  updateCateg: async (categId, data) => {
    try {
      const response = await configureApi.patch(
        categoryEndpoints.list + "/update/" + categId,
        { data }
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  addCategory: async (category) => {
    try {
      const response = await configureApi.post(categoryEndpoints.add, category);
      return response;
    } catch (error) {
      return error;
    }
  },
  deleteCateg: async (categId) => {
    try {
      const response = await configureApi.delete(
        categoryEndpoints.delete(categId)
      );
      return response;
    } catch (error) {
      return error;
    }
  },
};

export default categoryApi;
