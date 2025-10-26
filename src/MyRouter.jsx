import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CoffeesPage from "./pages/CoffeesPage";
import DashboardPage from "./pages/DashboardPage";
const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/coffees-page",
        element: <CoffeesPage></CoffeesPage>,
      },
      {
        path: "/dashboard-page",
        element: <DashboardPage></DashboardPage>,
      },
    ],
  },
]);

export default MyRouter;
