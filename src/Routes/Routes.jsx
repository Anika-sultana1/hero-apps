import { createBrowserRouter } from "react-router";

import App from "../App";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: '/',
            Component: Home,
        }
    ]
  },
]);