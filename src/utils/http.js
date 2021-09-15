import axios from "axios";
import qs from "qs";
import _ from "lodash";

// 创建一个新的axios实例
const axiosInstance = axios.create({
  baseURL: process.env.BASE_API || "http://localhost:6060/api/",
  withCredentials: false, //表示跨域请求时是否需要使用凭证
  timeout: 1000,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  },
});
function axiosRequest(method = "GET", url, params, data, config) {
  const jwtToken = "testToken";
  if (jwtToken) {
    _.set(config, "headers.Authorization", "JWT " + jwtToken);
  }
  const axiosConfig = {
    method,
    url: url,
    params,
    data,
    ...config,
  };
  return new Promise((resolve, reject) => {
    axiosInstance(axiosConfig)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export const request = {
  axiosInstance,
  get: (url, params, config) => axiosRequest("GET", url, params, null, config),
  post: (url, data, config) => axiosRequest("POST", url, null, data, config),
  put: (url, data, config) => axiosRequest("PUT", url, null, data, config),
  patch: (url, data, config) => axiosRequest("PATCH", url, null, data, config),
  delete: (url, data, config) =>
    axiosRequest("DELETE", url, null, data, config),
};
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    console.log(response);
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    console.log(error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
