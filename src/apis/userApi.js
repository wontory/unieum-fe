import axios from "axios";

const ROUTE = "user";

const userInstance = axios.create({
  baseURL: "https://develop.unieum.kr:4000/",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const getUser = async () => {
  try {
    return await userInstance.get(`${ROUTE}`);
  } catch (err) {
    throw new Error("getUser error");
  }
};

const deleteUser = async () => {
  return await authInstance.delete(`${ROUTE}`);
};

const postNps = async (data) => {
  try {
    return await userInstance.post(`${ROUTE}/nps`, data);
  } catch (err) {
    throw new Error("postNps error");
  }
};

export const userApi = {
  getUser,
  deleteUser,
  postNps,
};
