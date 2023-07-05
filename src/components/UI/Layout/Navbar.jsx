import { useContext } from "react";

import AuthContext from "../../../stores/auth-context";

import { Link } from "react-router-dom";

import { CgMenuLeftAlt } from "react-icons/cg";
import { BsChatFill } from "react-icons/bs";

import { ReactComponent as Logo } from "../../../assets/images/unieum_logo.svg";

const Navbar = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="navbar max-w-[1200px] w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-square btn-ghost lg:hidden">
            <CgMenuLeftAlt size={24} />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">업로드</Link>
            </li>
            <li>
              <Link to="my">복습</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          <Logo width="48" />
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <Link className="btn btn-ghost hidden lg:flex" to="/">
          업로드
        </Link>
        <Link className="btn btn-ghost hidden lg:flex" to="my">
          복습
        </Link>
        {ctx.isSignedIn ? (
          <button className="btn btn-ghost" onClick={ctx.onSignOut}>
            로그아웃
          </button>
        ) : (
          <Link
            className="btn btn-accent"
            to="https://develop.unieum.kr:4000/auth/kakao"
          >
            <BsChatFill />
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;