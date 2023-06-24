import axios from "axios";

const ROUTE = "user";

const userInstance = axios.create({
  baseURL: "https://develop.unieum.kr:4000",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const getIsSignedIn = async () => {
  try {
    return await userInstance.get(`${ROUTE}`);
  } catch (e) {
    throw new Error("getIsSignedIn error");
  }
};

export const userApi = {
  getIsSignedIn,
};
