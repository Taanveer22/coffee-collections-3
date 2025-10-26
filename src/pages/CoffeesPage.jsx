import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const CoffeesPage = () => {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {coffeesData.map((coffeeItem) => (
        <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
      ))}
    </div>
  );
};

export default CoffeesPage;
