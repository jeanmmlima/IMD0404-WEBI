import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "about",
      element: <Details />
    },
  ]);

export default router;