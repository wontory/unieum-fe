import { Link } from "react-router-dom";

import { CgMenuLeftAlt } from "react-icons/cg";
import { BsChatFill } from "react-icons/bs";

import { ReactComponent as Logo } from "../../../assets/unieum_logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 max-w-[1200px] w-full px-4">
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
        <Link
          className="btn btn-warning"
          to="https://unieum.xn--hk3b17f.xn--3e0b707e:4000/auth/kakao"
        >
          <BsChatFill />
          로그인
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
