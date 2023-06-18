import { CgMenuLeftAlt } from "react-icons/cg";
import { BsChatFill } from "react-icons/bs";

import { ReactComponent as Logo } from "../../../assets/unieum_logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 max-w-[1200px] w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <CgMenuLeftAlt size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>업로드</a>
            </li>
            <li>
              <a>복습</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
          <Logo width="48" />
        </a>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-ghost hidden lg:flex">업로드</a>
        <a className="btn btn-ghost hidden lg:flex">복습</a>
        <a className="btn btn-warning">
          <BsChatFill />
          로그인
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
