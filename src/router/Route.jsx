import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPlacerPage from "../pages/RegisterPlacerPage";
import UserPlacePage from "../pages/UserPlacePage";
import RedirectIfPlacer from "../feature/auth/RedirectIfPlacer";
import Authen from "../feature/auth/Authen";
import IsPlacer from "../feature/auth/IsPlacer";
import UserPage from "../pages/UserPage";
import RedirectIfNotAuthen from "../feature/auth/RedirectIfNotAuthen";
import SearchPage from "../pages/SearchPage";
import PlacePage from "../pages/PlacePage";
import SuccessPage from "../pages/SuccessPage";
import InFormBookingPage from "../pages/InFormBookingPage";
import MyBooking from "../pages/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfPlacer>
        <Layout />
      </RedirectIfPlacer>
    ),
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "login",
        element: (
          <Authen>
            <LoginPage />
          </Authen>
        ),
      },
      {
        path: "register",
        element: (
          <Authen>
            <RegisterPage />
          </Authen>
        ),
      },
      {
        path: "register-place",
        element: (
          <Authen>
            <RegisterPlacerPage />
          </Authen>
        ),
      },
      {
        path: "user",
        element: (
          <RedirectIfNotAuthen>
            <UserPage />
          </RedirectIfNotAuthen>
        ),
      },
      {
        path: "search-place",
        element: <SearchPage />,
      },
      {
        path: ":placeId",
        element: <PlacePage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
      { path: "inform-booking/:roomId", element: <InFormBookingPage /> },
      {
        path: "my-booking",
        element: (
          <RedirectIfNotAuthen>
            <MyBooking />
          </RedirectIfNotAuthen>
        ),
      },
    ],
  },
  {
    path: "/user-place",
    element: (
      <IsPlacer>
        <Layout />
      </IsPlacer>
    ),
    children: [{ path: "", element: <UserPlacePage /> }],
  },
]);
function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
