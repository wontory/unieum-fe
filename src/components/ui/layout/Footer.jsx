import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/unieum_logo.svg";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-full">
      <Logo width="48" />
      <p>문의: 우측 하단 채널톡 또는 카카오톡 채널 @유니음</p>
      <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
        아피스 대표 황준걸 서울특별시 동작구 상도로 60가길 2
        <br />
        <Link to="privacy">개인정보처리방침</Link>
        <br />
        Copyright © <Link to="">Apis</Link> {new Date().getFullYear()}
        {"."}
      </p>
    </div>
  );
};

export default Footer;