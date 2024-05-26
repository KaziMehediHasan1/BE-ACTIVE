import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../AddBlog/AddBlog";
import Error from "../ErrorPage/Error";
import AddBlog from "../AddBlog/AddBlog";
import AllBlogs from "../AllBlogs/AllBlogs";
import WishList from "../FeturedBlogs/WishList/WishList";
import FeaturedBlogs from "../FeturedBlogs/FeaturedBlogs";
import Banner from "../Home/Banner";

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
          element: <AddBlog></AddBlog>
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
      ]
    },
  ]);
export default router;