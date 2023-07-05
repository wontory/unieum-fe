import { useContext, useState } from "react";

import AuthContext from "../../stores/auth-context";

import { useNavigate, Link } from "react-router-dom";

import { testApi } from "../../apis/testApi";

import ModalPortal from "../UI/Modal/ModalPortal";
import LoadingModal from "../UI/Modal/LoadingModal";

const TextUpload = () => {
  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpload = async () => {
    let testGenerationId;

    window.loading_modal.showModal();

    try {
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
      <textarea
        className="textarea textarea-ghost h-[220px] rounded-2xl rounded-b-none"
        placeholder="문제를 생성하고 싶은 관련 텍스트를 입력해주세요."
        value={text}
        onChange={handleTextChange}
      />
      <div className="card-actions justify-end px-6 py-4">
        {ctx.isSignedIn ? (
          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={text.length === 0}
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
      <ModalPortal>
        <LoadingModal>열심히 문제 만드는 중...</LoadingModal>
      </ModalPortal>
    </>
  );
};

export default TextUpload;
