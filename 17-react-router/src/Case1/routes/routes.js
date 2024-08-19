/* existing imports */
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error/ErrorPage";
import Users from "../components/Users/Users";
import Posts from "../components/Posts/Posts";
import PostDetails from "../components/Posts/PostDetails";
import UserDetails from "../components/Users/UserDetail";
import About from "../components/About/About";


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
        element: <UserDetails />,
      },
      {
        path: "posts",
        element: <Posts />,
      },  
      {
        path: "posts/postdetail",
        element: <PostDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
  ],
}
  
]);

export default MyRouter;