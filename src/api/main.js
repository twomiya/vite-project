import { request } from "../utils/http";
export const getList = () => {
  return request.get("/list");
};

export const login = (data) => {
  return request.post("/login", data);
};

export const createArticle = (data) => {
  return request.post("/create", data);
};
