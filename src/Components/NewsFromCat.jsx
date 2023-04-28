import moment from "moment";
import { FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsFromCat = ({ news }) => {
  const { _id, title, image_url, details, author, total_view, rating } = news;
  return (
    <div>
      <div className="card bg-base-300 shadow-xl p-4">
        <div className="bg-base-100 mb-5 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img className="rounded-full h-10" src={author.img} alt="" />
            <div>
              <p>{author.name}</p>
              <p>{moment(author.published_date).format("YYYY-MM-D")}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
          </div>
        </div>
        <figure className="w-full">
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)} <br />
                <Link className="link link-info" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
        <div>
          <div className="flex gap-3">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar style={{ color: "#FF8C47" }}></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>{" "}
            <p>{rating.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFromCat;
