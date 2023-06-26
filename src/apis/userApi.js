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
  } catch (err) {
    throw new Error("getIsSignedIn error");
  }
};

const postSurvey = async (data) => {
  try {
    return await userInstance.post(`${ROUTE}/nps`, data);
  } catch (err) {
    throw new Error("postSurvey error");
  }
};

export const userApi = {
  getIsSignedIn,
  postSurvey,
};
