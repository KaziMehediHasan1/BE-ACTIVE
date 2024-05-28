import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../AddBlog/AddBlog";
import Error from "../ErrorPage/Error";
import AddBlog from "../AddBlog/AddBlog";
import AllBlogs from "../AllBlogs/AllBlogs";
import WishList from "../FeturedBlogs/WishList/WishList";
import FeaturedBlogs from "../FeturedBlogs/FeaturedBlogs";
import Banner from "../Home/Banner";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import RecentBlog from "../Home/RecentBlog";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Home></Home>,
      children:[
        {
          path: '/',
          element: <Banner></Banner>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/addBlog',
          element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>
        },
        {
          path: '/AllBlog',
          element: <AllBlogs></AllBlogs>
        },
        {
          path: '/FBlogs',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: '/wishList',
          element: <WishList></WishList>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    },
  ]);
export default router;