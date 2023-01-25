import configureApi from "../api";

const foodEndpoints = {
  list: "/product",
  getOne: (foodId) => `/product/${foodId}`,
  add: "/product/create",
  updated: (productId) => `/product/update/${productId}`,
  delete: (productId) => `/product/delete/${productId}`,
  pagination: (page, pageSize) => `/product?page=${page}&pageSize=${pageSize}`,
};

const productApi = {
  getProduct: async (page, pageSize) => {
    if (page && pageSize) {
      try {
        const response = await configureApi.get(
          foodEndpoints.pagination(page, pageSize)
        );
        return response;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const response = await configureApi.get(foodEndpoints.list);
        return response;
      } catch (error) {
        return error;
      }
    }
  },
  addProduct: async (product) => {
    try {
      const response = await configureApi.post(foodEndpoints.add, product);
      return { response };
    } catch (error) {
      return error;
    }
  },
  getOneProduct: async (productId) => {
    try {
      const response = await configureApi.get(foodEndpoints.getOne(productId));
      return { response };
    } catch (error) {
      return error;
    }
  },
  updateProduct: async (productId, product) => {
    try {
      const response = await configureApi.patch(
        foodEndpoints.updated(productId),
        product
      );
      return { response };
    } catch (error) {
      return error;
    }
  },
  deleteProduct: async (productId) => {
    try {
      const response = await configureApi.delete(
        foodEndpoints.delete(productId)
      );
      return { response };
    } catch (error) {
      return error;
    }
  },
};

export default productApi;
