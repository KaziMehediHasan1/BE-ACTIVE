import { useContext } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
// import axios from "axios";
const AllBlogs = () => {
  const blogs = useLoaderData();
  // const { data: blogs } = useQuery({
  //   queryKey: ["AllBlogs"],
  //   queryFn: async () =>
  //     await fetch(`${import.meta.env.VITE_API_URL}/addBlog`).then((res) =>
  //       res.json()
  //     ),
  // });

  // console.log('data', blogs);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(blogs);
  const handleAddWishList = (id) => {
    const blog = blogs.find((item) => item._id == id);
    const { title, longDescription, photoURL, shortDescription } = blog;
    const AllData = {
      email: user?.email,
      title,
      longDescription,
      photoURL,
      shortDescription,
    };
    console.log(AllData);
    fetch(`${import.meta.env.VITE_API_URL}/wishList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AllData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Wishlist Successfully Added");
        }
      });
    navigate("/wishList");
  };
  return (
    <div>
      {/* Search Bar.. */}
      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="John Doe"
          className="block relative  mt-2 w-[450px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        />
        <button className="justify-end flex absolute mt-2 w-28 rounded-lg border border-gray-200 px-2 py-2 text-white focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 bg-blue-500 dark:text-gray-300 dark:focus:border-blue-300">
          Search
        </button>
      </form>
      <div className="col-span-full  sm:col-span-1 w-full">
          <div className="ml-10">
            <select
              name="category"
              className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
            >
              <option value="Education" className="bg-white p-4">
                Education
              </option>
              <option value="Technology" selected className="bg-white p-4">
                Technology
              </option>
              <option value="Health" className="bg-white p-4">
                Health
              </option>
              <option value="Travel" className="bg-white p-4">
                Travel
              </option>
            </select>
          </div>
        </div>

      <div className="font-Fraunces grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-gray-100 p-6 shadow-blue-100 mt-4">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="md:flex md:justify-center rounded-md p-4 lg:shadow-lg"
          >
            <div className="lg:w-96 md:w-[950px] md:h-[530px] lg:h-[530px] ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                src={blog.photoURL}
                alt=""
                className="object-cover object-center w-full p-2 rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  {/* title */}
                  <h2
                    title={blog.title}
                    className="text-3xl hover:underline font-semibold tracking-wide"
                  >
                    {blog.title.substring(0, 15)}
                  </h2>
                  {/* category */}
                  <p title={blog.shortDescription} className="text-gray-800">
                    {blog.shortDescription.substring(0, 80)}...
                  </p>
                  {/* Short Description */}
                  <p className="text-red-500 font-semibold">{blog.category}</p>
                </div>
                {/* button */}
                <div className="flex space-x-3">
                  <NavLink
                    to={`/blogDetails/${blog._id}`}
                    className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50"
                  >
                    Details
                  </NavLink>
                  <button
                    onClick={() => handleAddWishList(blog._id)}
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
