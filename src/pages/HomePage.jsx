import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CategoriesTab from "../components/CategoriesTab";
import Heading from "../components/Heading";

const HomePage = () => {
  const categoryData = useLoaderData();
  // console.log(categoryData);

  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      <CategoriesTab categoryData={categoryData}></CategoriesTab>

      {/*============== Dynamic Content for Categories Tab=============== */}
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
