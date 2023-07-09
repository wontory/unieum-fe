import { useContext, useState } from "react";

import AuthContext from "../../stores/auth-context";

import Uploader from "./Uploader";

const TextUpload = () => {
  const ctx = useContext(AuthContext);

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <textarea
        className="textarea textarea-bordered h-[220px] w-full rounded-2xl rounded-b-none"
        placeholder="문제를 생성하고 싶은 관련 텍스트를 입력해주세요."
        value={text}
        onChange={handleTextChange}
        disabled={!ctx.isSignedIn}
      />
      <Uploader dataType="text" data={text} disabled={text.length === 0} />
    </>
  );
};

export default TextUpload;
