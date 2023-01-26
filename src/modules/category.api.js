import configureApi from "../api";

const categoryEndpoints = {
  list: "/category",
  getOne: (categId) => `/category/${categId}`,
  add: "category/create",
  updated: ({ categId }) => `/category/update/${categId}`,
  delete: ({ categId }) => `/category/delete/${categId}`,
};

const categoryApi = {
  getCategory: async () => {
    try {
      const response = await configureApi.get(categoryEndpoints.list);
      return response;
    } catch (error) {
      return error;
    }
  },
  updateCateg: async ({ categId }) => {
    try {
      const response = await configureApi.put(
        categoryEndpoints.updated(categId)
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  addCategory: async ({ title, image }) => {
    try {
      const response = await configureApi.post(categoryEndpoints.add, {
        title,
        image,
      });
      return response;
    } catch (error) {
      return error;
    }
  },
  deleteCateg: async ({ categId }) => {
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