import { createBrowserRouter } from "react-router";

import App from "../App";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/HomeData.json"),
        path: "/",

        Component: Home,
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch("/HomeData.json"),
        Component: AppDetails,
      },
      {
        path: "/apps",
        loader: () => fetch('/AppsData.json'),
        Component: Apps,
      },
      {
        path: "/Installation",
        Component: Installation,
      },
    ],
  },
]);
