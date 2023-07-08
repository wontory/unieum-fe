import axios from "axios";

const ROUTE = "auth";

const authInstance = axios.create({
  baseURL: "https://develop.unieum.kr:4000/",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const postReissueAccess = async () => {
  return await authInstance.post(`${ROUTE}/reissue-access`);
};

const postSignOut = async () => {
  return await authInstance.post(`${ROUTE}/sign-out`);
};

export const authApi = {
  postReissueAccess,
  postSignOut,
};
