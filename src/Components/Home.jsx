import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Header from "./Header";
import Navbar from "./Navbar";
import AuthProvider from "../AuthProvider/AuthProvider";

const Home = () => {
  return (
    <div className="w-[85%] mx-auto">
      <Header />
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-[1fr,3fr,1fr]">
        <LeftNav></LeftNav>
        <Outlet></Outlet>
        <AuthProvider><RightNav></RightNav></AuthProvider>
      </div>
    </div>
  );
};

export default Home;
