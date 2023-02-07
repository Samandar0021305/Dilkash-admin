import axios from "axios";
function errorHandling(status) {
  switch (parseInt(status)) {
    case 401:
      return "Logout or refresh token";
    case 403:
      return alert("Frontend developer sent data incorrectly!");
    case 500:
      return alert("Internal server Error!");
  }
}

const baseURL = process.env.REACT_APP_API_URL;

const configureApi = axios.create({
  baseURL,
});
configureApi.interceptors.request.use(async (config) => {
  const headers = { Accept: "application/json", "Accept-Encoding": "identity" };
  config.headers = headers;
  if (localStorage.getItem("token")) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return await config;
});

configureApi.interceptors.response.use(
  (response) => {
    // console.log("response -----------", response);
    if (response && response.data) return response.data;
  },
  function (err) {
    errorHandling(err.status);
    return Promise.reject(err);
  }
);

export default configureApi;
