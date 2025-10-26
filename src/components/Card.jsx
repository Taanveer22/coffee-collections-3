import { Link } from "react-router-dom";

const Card = ({ coffeeItem }) => {
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
      </div>
    </>
  );
};

export default Card;
