import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" />
        <p className="text-[#706F6F] my-5">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="bg-[#F3F3F3] p-3 flex items-center">
        <p className="bg-[#D72050] text-white text-xl py-2 px-5">Latest</p>
        <div className="text-[#403F3F] font-semibold">
          <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-[#706F6F] link-hover">
                <a>Home</a>
              </li>

              <li className="text-[#706F6F] link-hover">
                <a>About</a>
              </li>
              <li className="text-[#706F6F] link-hover">
                <a>Career</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#706F6F] link-hover">
              <a>Home</a>
            </li>

            <li className="text-[#706F6F] link-hover">
              <a>About</a>
            </li>
            <li className="text-[#706F6F] link-hover">
              <a>Career</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
