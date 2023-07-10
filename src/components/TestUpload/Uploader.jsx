import { useContext, useState } from "react";

import AuthContext from "../../stores/auth-context";

import { useNavigate, Link } from "react-router-dom";

import { testApi } from "../../apis/testApi";

import ModalPortal from "../UI/Modal/ModalPortal";
import LoadingModal from "../UI/Modal/LoadingModal";

const Uploader = ({ dataType, data, disabled }) => {
  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const [countOfQuestions, setCountOfQuestions] = useState("6");
  const [targetTestFormat, setTargetTestFormat] = useState("short-answer");

  const step = ["매우적게", "적게", "보통", "많이", "매우많이"];

  const handleCountOfQuestions = (event) => {
    setCountOfQuestions(event.target.value);
  };

  const handleTestType = (event) => {
    setTargetTestFormat(event.target.value);
  };

  const handleFileUpload = async () => {
    let testGenerationId;

    window.loading_modal.showModal();

    try {
      const formData = new FormData();
      formData.append("targetTestFormat", targetTestFormat);
      formData.append("targetLanguage", "korean");
      formData.append("openaiModel", "gpt-3.5-turbo-16k");
      formData.append("countOfQuestions", countOfQuestions);
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
      const text = {
        targetTestFormat: targetTestFormat,
        targetLanguage: "korean",
        openaiModel: "gpt-3.5-turbo-16k",
        countOfQuestions: countOfQuestions,
        text: data,
      };

      const res = await testApi.postText(text);
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
          <div className="card-actions justify-end items-center px-6 py-4">
            {ctx.isSignedIn ? (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      문제량: {step[countOfQuestions / 2 - 1]}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="2"
                    className="range w-[250px]"
                    value={countOfQuestions}
                    onChange={handleCountOfQuestions}
                  />
                </div>
                <select
                  className="select select-bordered"
                  value={targetTestFormat}
                  onChange={handleTestType}
                >
                  <option value="short-answer">주관식</option>
                  <option value="multiple-choice">객관식</option>
                </select>
                <button
                  className="btn btn-primary"
                  onClick={
                    dataType === "file" ? handleFileUpload : handleTextUpload
                  }
                  disabled={disabled}
                >
                  문제 생성
                </button>
              </>
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
