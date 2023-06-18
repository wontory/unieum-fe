import axios from "axios";
const ROUTE = "auth";

const authInstance = axios.create({
  baseURL: "https://unieum.서버.한국:4000",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const postSignOut = async () => {
  return await authInstance.post(`${ROUTE}/sign-out`);
};

export const authApi = {
  postSignOut,
};
