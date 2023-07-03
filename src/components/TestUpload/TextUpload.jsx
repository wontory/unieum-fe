import { useContext, useState } from "react";

import AuthContext from "../../store/auth-context";

import { Link } from "react-router-dom";

import { testApi } from "../../apis/testApi";

const TextUpload = () => {
  const ctx = useContext(AuthContext);

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpload = async () => {
    await testApi.postText(text);
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
    </>
  );
};

export default TextUpload;
