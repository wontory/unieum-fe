import { testGeneratorApi } from "../apis/testGeneratorApi";

export function useFileUpload(setLoading, setStep, setAlertMessage, setOpen) {
  const handleFileUpload = async (file) => {
    setLoading(true);

    if (!file) return;
    // setData(questonData2);
    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await testGeneratorApi.postPDF(formData);
      // console.log(response.data.data.testList.testGenerationId);

      localStorage.setItem(
        "testList",
        JSON.stringify(response.data.data.testList)
      );
      localStorage.setItem(
        "testGenerationId",
        response.data.data.testGenerationId
      );
      // console.log(response.data.data.testList);

      setLoading(false);
      setStep(1);
      document.title = "유니음 - 생성 완료!";
    } catch (err) {
      // console.log(err?.response?.data);
      setAlertMessage(err?.response?.data.message);

      // setData(questonData2);
      setLoading(false);
      setOpen(true);
      setStep(0);
    }
  };

  return handleFileUpload;
}
