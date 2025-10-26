import { NavLink } from "react-router-dom";

const CategoriesTab = ({ categoryData }) => {
  console.log(categoryData);
  return (
    <div className="flex justify-center items-center">
      <div role="tablist" className="tabs tabs-lift">
        {categoryData.map((categoryItem) => (
          <NavLink
            to={`/cardsCategory/${categoryItem.slug}`}
            key={categoryItem.id}
            className={"tab [--tab-bg:orange]"}
          >
            {categoryItem.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTab;
