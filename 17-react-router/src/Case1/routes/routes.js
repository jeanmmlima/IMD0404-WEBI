/* existing imports */
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error/ErrorPage";
import Contact from "../components/Contact";
import { Children } from "react";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

export default MyRouter;