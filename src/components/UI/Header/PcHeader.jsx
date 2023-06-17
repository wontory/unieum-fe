import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "../../../store/atoms";

import { useNavigate, Link } from "react-router-dom";
import TagManager from "react-gtm-module";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import LightTooltip from "./LightTooltip";
import kakao_login_large from "../../../assets/kakao_login_large.png";

const PcHeader = () => {
  const navigate = useNavigate();

  const isSignIn = useAtomValue(userAtom);
  const setSignIn = useSetAtom(userAtom);

  const handleLogout = async () => {
    try {
      const res = await authApi.postSignOut();
      if (!!res.data.data.id) {
        setSignIn(false);
        navigate("/");
      }
    } catch (err) {
      navigate("/");
    }
  };

  const handleLogin = async () => {
    try {
      const tagManagerArgs = {
        dataLayer: {
          event: "login",
        },
      };
      TagManager.dataLayer(tagManagerArgs);
      window.location.href =
        "https://unieum.xn--hk3b17f.xn--3e0b707e:4000/auth/kakao";
    } catch (error) {}
  };

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", color: "ButtonText" }}>
        <MenuItem>
          <Typography variant="body2" textAlign="center">
            업로드
          </Typography>
        </MenuItem>
      </Link>

      <Link to="/my" style={{ textDecoration: "none", color: "ButtonText" }}>
        <MenuItem>
          <Typography variant="body2" textAlign="center">
            복습
          </Typography>
        </MenuItem>
      </Link>

      {isSignIn ? (
        <MenuItem onClick={handleLogout}>
          <Typography variant="body2" textAlign="center">
            로그아웃
          </Typography>
        </MenuItem>
      ) : (
        <LightTooltip title={"문제 생성을 위해 로그인!"} open={!isSignIn}>
          <MenuItem id="login" onClick={handleLogin}>
            <img
              src={kakao_login_large}
              alt="kakao_login"
              style={{ width: "80px" }}
            />
          </MenuItem>
        </LightTooltip>
      )}
    </>
  );
};

export default PcHeader;
