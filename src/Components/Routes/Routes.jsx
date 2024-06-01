import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../AddBlog/AddBlog";
import Error from "../ErrorPage/Error";
import AddBlog from "../AddBlog/AddBlog";
import AllBlogs from "../AllBlogs/AllBlogs";
import Banner from "../Home/Banner";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import FeaturedBlogs from "../FeturedBlogs/FeaturedBlogs";
import WishList from "../WishList/WishList";
import BlogDetails from "../BlgoDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch("http://localhost:5000/addBlog")
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoutes>
            <AddBlog></AddBlog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/AllBlog",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/FBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/wishList/:id",
        element: <WishList></WishList>,
        loader: () => fetch("http://localhost:5000/addBlog")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
