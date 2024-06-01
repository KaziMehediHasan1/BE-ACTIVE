import { NavLink, useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import newsletter from '../../assets/news.jpg'
import 'animate.css';
import BlogDetails from "../BlgoDetails/BlogDetails";
const Banner = () => {
  const blogs = useLoaderData();
  // const handleDetailsBlogPage = blogs =>{

  // }
  return (
    <div className=" mb-14 mt-12">
      <img src={banner} className="lg:h-[850px] relative opacity-30 w-full" />
      <div className="absolute bottom-[480px] container">
        <div className=" flex justify-center items-center font-Fraunces text-4xl">
          <span className="font-bold text-5xl mr-4 text-blue-600 bg-gray-200 bg-opacity-10">
            Be Active
          </span>{" "}
          Your Source for News,{" "}
          <span className="text-3xl text-blue-600">H</span>ealthy,{" "}
          <span className="text-3xl text-blue-600">T</span>ech Innovations, and{" "}
          <span className="text-3xl text-blue-600">E</span>ducation
        </div>
        <div className="flex justify-center mt-14 bg-blue-500">
          <button className="mr-4 border p-2 hover:bg-blue-100 transition-all border-black">
            search
          </button>
          <button>search</button>
        </div>
      </div>

      {/* Recent Blog */}
      <div>
        <h1 className="mt-8 animate__slideInLeft text-center font-semibold font-Fraunces text-xl">
          {" "}
          <span className="text-4xl text-blue-600">Recent</span> All Blogs
        </h1>
        <div className="font-Fraunces grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-gray-100 rounded-md p-8 shadow-blue-100 mt-8">
          {blogs.slice(0, 6).map((blog) => (<div key={blog._id} className="animate__slideInLeft rounded-md p-4 shadow-lg">
              <div className="w-96 h-[530px] ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
                <img
                  src={blog.photoURL}
                  alt=""
                  className="object-cover object-center w-full p-2 rounded-t-md h-72"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    {/* title */}
                    <h2 className="text-3xl font-bold capitalize tracking-wide">
                      {blog.title.slice(0, 12)}...
                    </h2>
                    {/* category */}
                    <p className="text-gray-800">
                      {blog.shortDescription.slice(0, 84)}...
                    </p>
                    {/* Short Description */}
                    <p className="text-red-500 font-semibold">
                      {blog.category}
                    </p>
                  </div>
                  {/* button */}
                  <div className="flex space-x-3">
                    <NavLink to={`/blogDetails/${blog._id}`} className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50">
                      Details
                    </NavLink>
                    <NavLink to={`/wishlist/${blog._id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50">
                      Wishlist
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Section.. */}
      <h1 className="mt-8 font-semibold text-center  font-Fraunces text-xl"> <span className="text-4xl text-blue-600">N</span>ewsletter</h1>
      <div className="bg-blue-50 rounded-md mt-5 shadow-lg p-5">
        <div
          className="w-full bg-gray-500  rounded-md"
          // style={{
          //   backgroundImage: "url(https://source.unsplash.com/random/640x480)",
          // }}
          style={{
            backgroundImage:`url(${newsletter})`,
          }}
          
        >
          <div className="container shadow-2xl shadow-yellow-50 flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl font-Fraunces antialiased font-semibold leading-none text-center ">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl font-Fraunces antialiased text-center ">
              Find out about blogs and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Enter your mail"
                className="w-3/5 p-3 rounded-l-lg font-Fraunces sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold font-Fraunces rounded-r-lg sm:w-1/3 bg-blue-500 text-gray-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        {
          blogs.map(blog=> <BlogDetails key={blog._id} blog={blog}></BlogDetails>)
        }
      </div> */}
    </div>
  );
};

export default Banner;
