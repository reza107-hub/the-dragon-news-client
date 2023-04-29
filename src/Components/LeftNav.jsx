import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://the-news-dragon-server-dusky.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <p className="text-[#403F3F] font-semibold text-xl mb-5">All Caterogy</p>
      {catagories.map((category) => (
        <ul className="menu bg-base-100 rounded-box" key={category.id}>
          <li className="hover:bg-[#E7E7E7] hover:text-[#403F3F] px-12 py-4 text-[#9F9F9F] text-lg font-medium">
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default LeftNav;
