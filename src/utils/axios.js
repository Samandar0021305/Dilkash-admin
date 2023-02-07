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

const request = axios.create({
  baseURL,
});
request.interceptors.request.use((config) => {
  const headers = { Accept: 'application/json', 'Accept-Encoding': 'identity' }
  config.headers = headers;
  if (localStorage.getItem("token")) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return config

});

request.interceptors.response.use(
  (response) => {
          const {data} = request;
    return data ?? response;
  },
  function (error) {
          const {status} = error
    errorHandling(status);
    return Promise.reject(error);
  }
);

export default request;
