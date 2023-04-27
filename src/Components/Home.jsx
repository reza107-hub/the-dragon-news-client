import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const Home = () => {
  return (
    <div className="grid grid-cols-[1fr,3fr,1fr]">
      <LeftNav></LeftNav>
      <div>Main</div>
      <RightNav></RightNav>
    </div>
  );
};

export default Home;
