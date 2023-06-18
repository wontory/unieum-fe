import axios from "axios";

const ROUTE = "user";

const userInstance = axios.create({
  baseURL: "https://unieum.서버.한국:4000",
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

const getIsSuvey = async () => {
  try {
    return await userInstance.get(`${ROUTE}/nps`);
  } catch (e) {
    throw new Error("getIsSuvey error");
  }
};

const postSurvey = async (data) => {
  try {
    return await userInstance.post(`${ROUTE}/nps`, data);
  } catch (e) {
    throw new Error("postSurvey error");
  }
};

export const userApi = {
  getIsSignIN,
  getIsSuvey,
  postSurvey,
};
