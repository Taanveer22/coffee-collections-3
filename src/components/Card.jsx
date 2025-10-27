import { Link, useLocation } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ coffeeItem, handleRemoveFromFavourite }) => {
  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  // console.log(pathname);

  // console.log(coffeeItem);
  const { id, name, category, description, image, popularity, rating } =
    coffeeItem;

  return (
    <>
      <div className="card bg-gray-200 shadow-sm">
        <Link to={`/CardDetail/${id}`}>
          <figure>
            <img src={image} className="w-full h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rating : {rating}</div>
              <div className="badge badge-outline">
                Popularity : {popularity}
              </div>
            </div>
          </div>
        </Link>
        {pathname === "/dashboardPage" && (
          <div
            onClick={() => handleRemoveFromFavourite(id)}
            className="absolute -top-5 -right-5 bg-red-500 p-3 rounded-full"
          >
            <FaRegTrashAlt size={20}></FaRegTrashAlt>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
