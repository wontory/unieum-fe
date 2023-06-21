import { useState, useLayoutEffect } from "react";

import { Link } from "react-router-dom";

import { userApi } from "../../../apis/userApi";
import { authApi } from "../../../apis/authApi";

import { CgMenuLeftAlt } from "react-icons/cg";
import { BsChatFill } from "react-icons/bs";

import { ReactComponent as Logo } from "../../../assets/unieum_logo.svg";

const Navbar = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useLayoutEffect(() => {
    if (isSignIn === false) {
      userApi
        .getIsSignIN()
        .then((res) => {
          setIsSignIn(true);
        })
        .catch((err) => {
          setIsSignIn(false);
        });
    }
  }, []);

  return (
    <nav className="navbar max-w-[1200px] w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-square btn-ghost lg:hidden">
            <CgMenuLeftAlt size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="">업로드</Link>
            </li>
            <li>
              <Link to="my">복습</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" to="">
          <Logo width="48" />
        </Link>
      </div>
      <div className="navbar-end gap-2">
        <Link className="btn btn-ghost hidden lg:flex" to="">
          업로드
        </Link>
        <Link className="btn btn-ghost hidden lg:flex" to="my">
          복습
        </Link>
        {isSignIn ? (
          <button
            className="btn btn-ghost"
            onClick={async () => {
              try {
                const res = await authApi.postSignOut();
                if (!!res.data.data.id) setSignIn(false);
              } catch (err) {}
              location.reload();
            }}
          >
            로그아웃
          </button>
        ) : (
          <div
            className="tooltip tooltip-open tooltip-bottom"
            data-tip="사용하려면 로그인!"
          >
            <Link
              className="btn btn-warning"
              to="https://develop.unieum.xn--hk3b17f.xn--3e0b707e:4000/auth/kakao"
            >
              <BsChatFill />
              로그인
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
