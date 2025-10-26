import { NavLink } from "react-router-dom";

const CategoriesTab = ({ categoryData }) => {
  // console.log(categoryData);
  return (
    <div className="flex justify-center items-center">
      <div role="tablist" className="tabs tabs-lift mb-6">
        {categoryData.map((categoryItem) => (
          <NavLink
            to={`/cardsCategory/${categoryItem.category}`}
            key={categoryItem.id}
            className={({ isActive }) =>
              isActive
                ? "tab tab-active [--tab-bg:orange] text-lg font-medium"
                : "tab text-lg font-medium"
            }
          >
            {categoryItem.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTab;
