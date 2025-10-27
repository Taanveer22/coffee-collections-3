import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const AllCards = () => {
  const { categoryType } = useParams();
  // console.log(categoryType);
  const coffeesData = useLoaderData();
  // console.log(coffeesData);
  const [coffees, setCoffees] = useState([]);
  // console.log(coffees);
  const navigate = useNavigate();
  // console.log(navigate);

  useEffect(() => {
    if (categoryType) {
      const filteredByCategory = [...coffeesData].filter(
        (coffeeItem) => coffeeItem.category === categoryType
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(coffeesData.slice(0, 6));
    }
  }, [coffeesData, categoryType]);

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={() => setCoffees(coffeesData)}
          className="btn btn-warning"
        >
          View all here
        </button>
        <button
          onClick={() => navigate("/coffeesPage")}
          className="btn btn-warning"
        >
          View in new page
        </button>
      </div>
    </>
  );
};

export default AllCards;
