import { Outlet } from "react-router-dom";
import RightNav from "./RightNav";
import Header from "./Header";
import AuthProvider from "../AuthProvider/AuthProvider";
const NewsLayOut = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header />
      <div className="grid lg:grid-cols-[4fr,1fr]">
        <Outlet />
        <AuthProvider><RightNav></RightNav></AuthProvider>
      </div>
    </div>
  );
};

export default NewsLayOut;
