import axios from "axios";
import queryString from "query-string";
import { product } from "./baseUrl";
// export const getProduct = async (params) => {
//   try {
//     const { data } = await Axios({
//       url: product,
//       params: params,
//     });
//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

const configureApi = axios.create({
  product,
  paramsSerializer: {
    encode: (param) => queryString.stringify(param),
  },
});

configureApi.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
});

configureApi.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
});

export default configureApi;
