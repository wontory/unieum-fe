import axios from "axios";

const ROUTE = "auth";

const authInstance = axios.create({
  baseURL: "https://develop.unieum.xn--hk3b17f.xn--3e0b707e:4000",
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
