import axios from "axios";

const ROUTE = "test-generation";

const testInstance = axios.create({
  baseURL: "https://server.unieum.kr",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const postPdf = async (formData) => {
  return await testInstance.post(`${ROUTE}/upload/pdf`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const postText = async (text) => {
  return await testInstance.post(
    `${ROUTE}/upload/text`,
    { targetTestFormat: "short-answer", targetLanguage: "korean", text: text },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const getList = async () => {
  return await testInstance.get(`${ROUTE}/all`, {
    headers: { "Content-Type": "application/json" },
  });
};

const getTest = async (id) => {
  return await testInstance.get(`${ROUTE}/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const testApi = {
  postPdf,
  postText,
  getList,
  getTest,
};
