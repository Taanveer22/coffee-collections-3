import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const CoffeesPage = () => {
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const [coffees, setCoffees] = useState(coffeesData);
  // console.log(coffees);
  const handleSort = (sortBy) => {
    console.log(sortBy);
    if (sortBy === "popularity") {
      const sorted = [...coffeesData].sort(
        (a, b) => a.popularity - b.popularity
      );
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...coffeesData].sort((x, y) => y.rating - x.rating);
      setCoffees(sorted);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium">
          Sort Coffee's by Popularity & Rating
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-info"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-accent"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </>
  );
};

export default CoffeesPage;
