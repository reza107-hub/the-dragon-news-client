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
      <div>
       
      </div>
    </div>
  );
};

export default Header;
