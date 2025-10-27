import Heading from "../components/Heading";
import nutritionImage from "../assets/nutrition.png";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utilities";
import Card from "../components/Card";

const DashboardPage = () => {
  const [coffees, setCoffees] = useState([]);
  // console.log(coffees);
  useEffect(() => {
    const favouriteList = getFromLocalStorage();
    setCoffees(favouriteList);
  }, []);
  return (
    <div>
      <img src={nutritionImage} className="w-1/2 mx-auto h-80"></img>
      <Heading
        title={"Welcome to Dashboard"}
        subTitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here."
        }
      ></Heading>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffeeItem) => (
          <Card key={coffeeItem.id} coffeeItem={coffeeItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
