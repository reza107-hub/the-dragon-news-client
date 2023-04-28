import { useLoaderData } from "react-router-dom";
import NewsFromCat from "./NewsFromCat";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <p className="text-[#403F3F] font-semibold text-xl mb-5">Dragon News Home</p>
      {categoryNews.map((news) => (
        <NewsFromCat key={news._id} news={news}></NewsFromCat>
      ))}
    </div>
  );
};

export default Category;
