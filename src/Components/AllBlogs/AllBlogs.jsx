import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import axios from "axios";
const AllBlogs = () => {
  const [filter, setFilter] = useState("");
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["AllBlogs", filter, title],
    queryFn: async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/addBlog?filter=${filter}&title=${title}`
      );
      return data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const title = e.target.search.value;
    setTitle(title);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFilter("");
  };
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

  if (isLoading) {
    return (
      <p className="mt-52 flex justify-center">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>{" "}
      </p>
    );
  }
  return (
    <div className="lg:w-[1320px] md:w-[710px] w-[390px] mx-auto">
      {/* Search Bar.. */}
      <div className="grid grid-cols-2 mt-10 space-x-14 lg:w-[1200px] md:w-[560px] w-[340px] mx-auto ">
        <form className="flex mx-auto p-2 rounded-lg lg:focus-within:ring w-full ">
          <input
            className="px-6 mr-2 border rounded-md text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent w-[130px] md:w-full"
            type="text"
            name="search"
            placeholder="search by title"
          />
          <button
            onSubmit={handleSearch}
            className="px-1 md:px-4  md:py-3  text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-300 hover:text-black focus:bg-gray-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div className="flex items-center">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="category"
            id="category"
            className="border p-2 lg:mr-2 rounded-lg md:w-full w-[120px]"
          >
            <option value="">Filter By Category</option>
            <option value="Education">Education</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
          </select>
          <button
            onClick={handleReset}
            className="px-1 ml-2 hidden md:block md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-300 hover:text-black focus:bg-gray-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:p-6 md:p-0 mt-4">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="md:flex md:justify-center rounded-md p-4"
          >
            <div className="lg:w-[850px] md:w-[560px] lg:h-[550px] h-[470px] mx-auto ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                src={blog?.photoURL}
                className="object-cover object-center w-full p-2 rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 lg:space-y-8 space-y-6">
                <div className="lg:space-y-2">
                  <h2
                    title={blog?.title}
                    className="lg:text-3xl text-xl hover:underline font-semibold tracking-wide"
                  >
                    {blog?.title.substring(0, 15)}
                  </h2>

                  <p
                    title={blog.shortDescription}
                    className="text-gray-800 text-sm lg:text-xl"
                  >
                    {blog?.shortDescription.substring(0, 50)}...
                  </p>
                  <p className="text-red-500 font-semibold text-sm lg:text-xl">
                    {blog?.category}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <NavLink
                    to={`/blogDetails/${blog._id}`}
                    className="flex  items-center justify-center w-full lg:p-3 p-1 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                  >
                    Details
                  </NavLink>
                  <button
                    onClick={() => handleAddWishList(blog._id)}
                    className="flex items-center justify-center w-full lg:p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
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
