import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
