import { useContext } from "react";

import AuthContext from "../../stores/auth-context";

import { useNavigate, Link } from "react-router-dom";

import { testApi } from "../../apis/testApi";

import ModalPortal from "../UI/Modal/ModalPortal";
import LoadingModal from "../UI/Modal/LoadingModal";

const Uploader = ({ dataType, data, disabled }) => {
  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const handleFileUpload = async () => {
    let testGenerationId;

    window.loading_modal.showModal();

    try {
      const formData = new FormData();
      formData.append("targetTestFormat", "short-answer");
      formData.append("targetLanguage", "korean");
      formData.append("openaiModel", "gpt-3.5-turbo-16k");
      formData.append("countOfQuestions", "5");
      data.map((file) => formData.append("fileList", file.file));

      const res = await testApi.postFileList(formData);
      testGenerationId = res.data.data.testGenerationId;
    } catch (err) {
      alert(`문제 생성에 실패했습니다. (${err?.response?.data.message})`);
      window.loading_modal.closeModal();
      window.location.reload();
    }

    navigate(`/done/${testGenerationId}`);
  };

  const handleTextUpload = async () => {
    let testGenerationId;

    window.loading_modal.showModal();

    try {
      const res = await testApi.postText(data);
      testGenerationId = res.data.data.testGenerationId;
    } catch (err) {
      alert(`문제 생성에 실패했습니다. (${err?.response?.data.message})`);
      window.loading_modal.closeModal();
      window.location.reload();
    }

    navigate(`/done/${testGenerationId}`);
  };

  return (
    <>
      <div className="card card-bordered rounded-t-none border-t-0 bg-base-100">
        <div className="card-body p-0 gap-0">
          <div className="card-actions justify-end px-6 py-4">
            {ctx.isSignedIn ? (
              <button
                className="btn btn-primary"
                onClick={
                  dataType === "file" ? handleFileUpload : handleTextUpload
                }
                disabled={disabled}
              >
                문제 생성
              </button>
            ) : (
              <Link
                className="btn btn-primary"
                to="https://develop.unieum.kr:4000/auth/kakao"
              >
                로그인 후 이용하기
              </Link>
            )}
          </div>
        </div>
      </div>
      <ModalPortal>
        <LoadingModal>열심히 문제 만드는 중...</LoadingModal>
      </ModalPortal>
    </>
  );
};

export default Uploader;
