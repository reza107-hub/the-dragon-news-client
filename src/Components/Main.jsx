import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
