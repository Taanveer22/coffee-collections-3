import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const AllCards = () => {
  const { categoryType } = useParams();
  // console.log(categoryType);
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const [coffees, setCoffees] = useState([]);
  // console.log(coffees);
  useEffect(() => {
    const filteredByCategory = coffeesData.filter(
      (coffeeItem) => coffeeItem.category === categoryType
    );
    setCoffees(filteredByCategory);
  }, [coffeesData, categoryType]);

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-6">
        <button className="btn btn-warning">View all here</button>
        <button className="btn btn-warning">View in new page</button>
      </div>
    </>
  );
};

export default AllCards;
