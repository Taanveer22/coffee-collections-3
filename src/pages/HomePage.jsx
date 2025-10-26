import Banner from "../components/Banner";
import Heading from "../components/Heading";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
    </div>
  );
};

export default HomePage;
