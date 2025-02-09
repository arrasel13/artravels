import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/home";
import AllTouristSpot from "../components/touristspot/alltouristspot";
import AddTouristSpot from "../components/touristspot/addtouristspot";
import Mylist from "../components/mylist/mylist";
import Login from "../components/loginregister/login";
import Register from "../components/loginregister/register";
import PrivateRoute from "./privateroute";
import TouristSpotDetail from "../components/touristspot/touristspotDetail";
import EditTouristSpot from "../components/touristspot/edittouristspot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-tourist-spot",
        element: <AllTouristSpot />,
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/touristspot-detail/:id",
        element: <TouristSpotDetail />,
        loader: ({ params }) =>
          fetch(`http://localhost:500/all-tourist-spot/${params.id}`),
      },
      {
        path: "/edit-touristspot/:id",
        element: (
          <PrivateRoute>
            <EditTouristSpot />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:500/all-tourist-spot/${params.id}`),
      },
      {
        path: "/my-list/",
        element: (
          <PrivateRoute>
            <Mylist />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
