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
  getCategory: async (page, pageSize) => {
    if (page && pageSize) {
      try {
        const response = await configureApi.get(
          categoryEndpoints.pagination(page, pageSize)
        );
        return response;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const response = await configureApi.get(categoryEndpoints.list);
        return response;
      } catch (error) {
        return error;
      }
    }
  },
  updateCateg: async (categId, category) => {
    try {
      const response = await configureApi.patch(
        categoryEndpoints.updated(categId),
        category
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
