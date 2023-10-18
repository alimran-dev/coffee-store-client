import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-ten-coral.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ten-coral.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ten-coral.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
