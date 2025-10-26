import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CoffeesPage from "./pages/CoffeesPage";
import DashboardPage from "./pages/DashboardPage";
import AllCards from "./components/AllCards";
import CardDetail from "./components/CardDetail";
const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <AllCards></AllCards>,
            loader: () => fetch("/coffees.json"),
          },
          {
            path: "/cardsCategory/:categoryType",
            element: <AllCards></AllCards>,
            loader: () => fetch("/coffees.json"),
          },
        ],
      },
      {
        path: "/coffeesPage",
        element: <CoffeesPage></CoffeesPage>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/CardDetail/:cardId",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/coffees.json"),
      },
      {
        path: "/dashboardPage",
        element: <DashboardPage></DashboardPage>,
      },
    ],
  },
]);

export default MyRouter;
