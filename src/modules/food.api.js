import configureApi from "../api";

const foodEndpoints = {
  list: "foods",
  add: "foods",
  remove: ({ foodId }) => `foods/ ${foodId}`,
};

const foodApi = {
  getFood: async () => {
    try {
      const response = await configureApi.get(foodEndpoints.list);
      return { response };
    } catch (error) {
      return error;
    }
  },
  addFood: async ({ name, description, image }) => {
    try {
      const response = await configureApi.post(foodEndpoints.add, {
        name,
        description,
        image,
      });
      return { response };
    } catch (error) {
      return error;
    }
  },
  deleteFood: async ({ foodId }) => {
    try {
      const response = await configureApi.delete(foodEndpoints.delete(foodId));
      return { response };
    } catch (error) {
      return error;
    }
  },
};

export default foodApi
