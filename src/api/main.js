import { request } from "../utils/http";
export const getList = () => {
  return request.get("/list");
};

export const login = (data) => {
  console.log(data);
  return request.post("/login", data);
};
