import { useContext, useState } from "react";

import AuthContext from "../../store/auth-context";

import { testApi } from "../../apis/testApi";

const TextUpload = () => {
  const ctx = useContext(AuthContext);

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const upload = () => {
    testApi.postText(text.current.value);
  };

  return (
    <>
      <textarea
        className="textarea textarea-bordered textarea-lg"
        placeholder="문제를 생성하고 싶은 텍스트를 복사 붙여넣기 해주세요."
        value={text}
        onChange={handleTextChange}
        disabled={!ctx.isSignedIn}
      />
      <button
        className="btn btn-primary"
        onClick={upload}
        disabled={text.length === 0}
      >
        문제 생성
      </button>
    </>
  );
};

export default TextUpload;
