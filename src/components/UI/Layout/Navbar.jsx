import { useContext } from "react";

import AuthContext from "../../../stores/auth-context";

import { Link } from "react-router-dom";

import { CgMenu } from "react-icons/cg";
import { BsChatFill } from "react-icons/bs";

import { ReactComponent as Icon } from "../../../assets/images/unieum_icon.svg";
import { ReactComponent as Logo } from "../../../assets/images/unieum_logo.svg";

const Navbar = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="navbar max-w-[1200px] w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          <Icon />
          <Logo width="48" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link className="btn btn-ghost hidden lg:flex" to="/">
          업로드
        </Link>
        <Link className="btn btn-ghost hidden lg:flex" to="my">
          복습
        </Link>
        {ctx.isSignedIn ? (
          <button
            className="btn btn-ghost hidden lg:flex"
            onClick={ctx.onSignOut}
          >
            로그아웃
          </button>
        ) : (
          <Link
            className="btn btn-accent hidden lg:flex"
            to="https://develop.unieum.kr:4000/auth/kakao"
          >
            <BsChatFill />
            로그인
          </Link>
        )}
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn btn-ghost btn-circle">
            <CgMenu size={24} />
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">업로드</Link>
            </li>
            <li>
              <Link to="my">복습</Link>
            </li>
            {ctx.isSignedIn ? (
              <li>
                <a onClick={ctx.onSignOut}>로그아웃</a>
              </li>
            ) : (
              <li>
                <Link to="https://develop.unieum.kr:4000/auth/kakao">
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
