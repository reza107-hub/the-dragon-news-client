import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const { image_url, title, details, category_id } = newsDetails;
  return (
    <div>
      <p className="text-[#403F3F] font-semibold text-xl mb-5">Dragon News</p>
      <div className="card card-compact w-full p-8 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-start">
            <Link to={`/category/${category_id}`}>
              <button className="py-3 px-6 text-white bg-[#D72050] flex items-center gap-3">
                <FaArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
