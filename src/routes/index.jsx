import { createBrowserRouter, redirect } from "react-router-dom";
import DetailsView from "../views/Details";
import DetailView from "../views/Detail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DetailsView />,
    loader: () => redirect("/products"),
  },
  {
    path: "/products",
    element: <DetailsView />,
  },
  {
    path: "product/:id",
    element: <DetailView />,
  },
]);
export default routes;
