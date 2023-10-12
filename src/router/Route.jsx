import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPlacerPage from "../pages/RegisterPlacerPage";
import UserPlacePage from "../pages/UserPlacePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "register-place", element: <RegisterPlacerPage /> },
      { path: "user-place", element: <UserPlacePage /> },
    ],
  },
]);
function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
