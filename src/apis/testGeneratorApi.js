import axios from "axios";

const testGeneratorInstance = axios.create({
  baseURL: "https://unieum.서버.한국:4000",
  headers: {
    AccessControlAllowOrigin: "*",
  },
  withCredentials: true,
});

const postAccessToken = async (code) => {
  try {
    return await testGeneratorInstance.post("auth/kakao", { code });
  } catch (e) {
    throw new Error("postAccessToken error");
  }
};

const postPDF = async (formData) => {
  return await testGeneratorInstance.post(
    "test-generation/upload/pdf",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

const postText = async (text) => {
  return await testGeneratorInstance.post(
    "test-generation/upload/text",
    { text },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};

const getList = async () => {
  return await testGeneratorInstance.get("test-generation/all", {
    headers: { "Content-Type": "application/json" },
  });
};

const getTest = async (id) => {
  return await testGeneratorInstance.get(`test-generation/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const testGeneratorApi = {
  postAccessToken,
  postPDF,
  postText,
  getList,
  getTest,
};
