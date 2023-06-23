import { useContext } from "react";

import AuthContext from "../../store/auth-context";

const TextUpload = () => {
  const ctx = useContext(AuthContext);

  return (
    <textarea
      className="textarea textarea-bordered textarea-lg"
      placeholder="문제를 생성하고 싶은 텍스트를 복사 붙여넣기 해주세요."
      disabled={!ctx.isSignedIn}
    />
  );
};

export default TextUpload;
