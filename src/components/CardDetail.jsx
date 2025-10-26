import { useParams } from "react-router-dom";

const CardDetail = () => {
  const { cardId } = useParams();
  console.log(cardId);
  return <div>CardDetail...{cardId}</div>;
};

export default CardDetail;
