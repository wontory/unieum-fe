import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/images/unieum_logo.svg";

const Footer = () => {
  return (
    <div className="footer max-w-[1200px] w-full">
      <div>
        <Logo width="48" />
        <p>문의: 우측 하단 채널톡 또는 카카오톡 채널 @유니음</p>
        <p className="text-[#00000099]">
          아피스 대표 황준걸 서울특별시 동작구 상도로 60가길 2
          <br />
          <Link className="link link-hover" to="privacy">
            개인정보처리방침
          </Link>
          <br />
          Copyright ©{" "}
          <Link className="link link-hover" to="">
            Apis
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </p>
      </div>
    </div>
  );
};

export default Footer;
