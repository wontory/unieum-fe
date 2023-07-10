import axios from "axios";

const ROUTE = "test-generation";

const testInstance = axios.create({
  baseURL: "https://develop.unieum.kr:4000/",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const postFileList = async (formData) => {
  return await testInstance.post(`${ROUTE}/upload/file-list`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const postText = async (text) => {
  return await testInstance.post(`${ROUTE}/upload/text`, text, {
    headers: { "Content-Type": "application/json" },
  });
};

const postGrade = async (answer) => {
  return await testInstance.post(`${ROUTE}/grade`, answer, {
    headers: { "Content-Type": "application/json" },
  });
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
  postFileList,
  postText,
  postGrade,
  getList,
  getTest,
};
