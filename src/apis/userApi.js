import axios from "axios";

const ROUTE = "user";

const userInstance = axios.create({
  baseURL: "https://develop.unieum.xn--hk3b17f.xn--3e0b707e:4000",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const getIsSignIN = async () => {
  try {
    return await userInstance.get(`${ROUTE}`);
  } catch (e) {
    throw new Error("getIsSignIN error");
  }
};

export const userApi = {
  getIsSignIN,
};
