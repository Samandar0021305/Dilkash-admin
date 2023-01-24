import configureApi from "../api";

const userEndPoints = {
  signIn: "signIn",
};

const userApi = {
  signIn: async ({ login, password }) => {
    try {
      const response = await configureApi.post(userEndPoints, {
        login,
        password,
      });
      return { response };
    } catch (error) {
      return error;
    }
  },
};

export default userApi;
