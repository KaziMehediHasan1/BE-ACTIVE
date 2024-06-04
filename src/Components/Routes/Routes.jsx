import { createBrowserRouter } from "react-router-dom";
import Blog from "../AddBlog/AddBlog";
import Error from "../ErrorPage/Error";
import AddBlog from "../AddBlog/AddBlog";
import AllBlogs from "../AllBlogs/AllBlogs";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import FeaturedBlogs from "../FeturedBlogs/FeaturedBlogs";
import WishList from "../WishList/WishList";
import BlogDetails from "../BlgoDetails/BlogDetails";
import UpdateBlogs from "../AddBlog/UpdateBlogs";
import Root from "../Home/Root";
import Home from '../Home/Home'
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/comment/${params.id}`)
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
        path: '/updateBlog/:id',
        element: <PrivateRoutes><UpdateBlogs></UpdateBlogs></PrivateRoutes>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addBlogs/${params.id}`)
      },
      {
        path: "/AllBlog",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`),
      },
      {
        path: "/FBlogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`),
      },
      {
        path: '/wishList',
        element:<PrivateRoutes><WishList></WishList></PrivateRoutes>
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
