import { request } from "../utils/http";
export const getList = () => {
  return request.get("/list");
};
