import toast from "react-hot-toast";

//========== get all coffees from local storage
const getFromLocalStorage = () => {
  const wholeFavouriteList = localStorage.getItem("favouriteList");
  // console.log(wholeFavouriteList);
  if (wholeFavouriteList) {
    const favouriteList = JSON.parse(wholeFavouriteList);
    // console.log(favouriteList);
    return favouriteList;
  } else {
    // console.log([]);
    return [];
  }
};

//================= add a coffe to local storage
const addToLocalStorage = (oneCoffee) => {
  // console.log(oneCoffee);
  const favouriteList = getFromLocalStorage();
  // console.log(favouriteList);
  const isExist = favouriteList.find((item) => item.id === oneCoffee.id);
  // console.log(isExist);
  if (isExist) {
    return toast.error("already exist");
  } else {
    favouriteList.push(oneCoffee);
    localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
    return toast.success("successfully added");
  }
};

//================== remove a coffee from local storage
const removeFromLocalStorage = (id) => {
  console.log(id);
  const favouriteList = getFromLocalStorage();
  const removedFavouriteList = favouriteList.filter((item) => item.id !== id);
  localStorage.setItem("favouriteList", JSON.stringify(removedFavouriteList));
  return toast.success("successfully removed");
};

export { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
