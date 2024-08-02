/* existing imports */
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error/ErrorPage";
import Users from "../components/Users/Users";
import Posts from "../components/Posts/Posts";
import PostDetails from "../components/Posts/PostDetails";


const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  children: [
    {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <Users />,
      },
      {
        path: "posts",
        element: <Posts />,
      },  
      {
        path: "posts/:postId",
        element: <PostDetails />,
      },
  ],
}
  
]);

export default MyRouter;