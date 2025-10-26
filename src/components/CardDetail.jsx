import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage, getFromLocalStorage } from "../utilities";

const CardDetail = () => {
  const { cardId } = useParams();
  // console.log(cardId);
  const cardsData = useLoaderData();
  // console.log(cardsData);
  const [oneCoffee, setOneCoffee] = useState({});
  // console.log(oneCoffee);

  useEffect(() => {
    const findedByCardId = cardsData.find(
      (coffeeItem) => coffeeItem.id === parseInt(cardId)
    );
    setOneCoffee(findedByCardId);
  }, [cardsData, cardId]);

  const { image, name, description } = oneCoffee;

  const handleAddToFavourite = (oneCoffee) => {
    addToLocalStorage(oneCoffee);
    // getFromLocalStorage(oneCoffee);
  };
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Card Id : {cardId}</h1>
      <div className="hero bg-blue-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <button
              onClick={() => handleAddToFavourite(oneCoffee)}
              className="btn btn-primary"
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
