import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../Styles/style.css";
import QzZone from "./qzZone";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const RightNav = () => {
  const { user, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const handleLogInGoogle = () => {
    logInWithGoogle();
  };
  const handleLogInGithub = () => {
    logInWithGithub();
  };
  return (
    <div>
      {user ? (
        <></>
      ) : (
        <>
          <div>
            <p className="text-2xl font-bold mb-5">Login with</p>
            <button
              onClick={handleLogInGoogle}
              className="btn w-full normal-case border border-[#5c6ac4] text-[#5c6ac4] mb-3"
            >
              <FaGoogle className="mr-2"></FaGoogle>
              Login with Google
            </button>
            <button
              onClick={handleLogInGithub}
              className="btn w-full normal-case border border-black"
            >
              <FaGithub className="mr-2"></FaGithub>
              Login with Github
            </button>
          </div>
        </>
      )}
      <div>
        <p className="text-2xl text-[#403F3F] my-10 font-semibold mb-5">
          Find Us On
        </p>
        <div>
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li className="border border-solid border-[#E7E7E7]">
              <a>
                <FaFacebook className="text-[#3B599C]"></FaFacebook>
                Facebook
              </a>
            </li>
            <li className="border border-solid border-[#E7E7E7]">
              <a>
                <FaTwitter className="text-[#58A7DE]"></FaTwitter>
                Twitter
              </a>
            </li>
            <li className="border border-solid border-[#E7E7E7]">
              <a>
                <FaInstagram className="instagram"></FaInstagram>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <QzZone></QzZone>
      <div className="mt-3">
        <div
          className="hero py-14"
          style={{
            backgroundImage: `url("https://i.ibb.co/XD5RQzs/bg.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-white font-bold">
                Create an Amazing Newspaper
              </h1>
              <p className="mb-7 text-white">
                Discover thousands of options, easy to customize layouts,
                one-click to import demo and much more.
              </p>
              <button className="btn bg-[#D72050] text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
