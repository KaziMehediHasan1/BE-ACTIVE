import { useContext } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";

const HomePageCard = () => {
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddWishList = (id) => {
    if (user) {
      const blog = blogs.find((item) => item._id == id);
      const { title, longDescription, photoURL, shortDescription, users } =
        blog;
      const AllData = {
        title,
        longDescription,
        photoURL,
        shortDescription,
        users,
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
    }
    if (!user) {
      navigate("/login");
    }
  };
  return (
    <div className="mt-8">
      <h1 className="font-bold text-center lg:text-3xl text-2xl uppercase">
        Recent Blogs
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 md:grid-cols-2 bg-gray-100 mt-4 md:mt-7 rounded-md p-8">
        {blogs?.slice(0, 6)?.map((blog) => (
          <div key={blog._id} data-aos="fade-right">
            <div className="lg:w-96 lg:h-[560px] ml-2 shadow-md">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 2, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                src={blog.photoURL}
                className="object-cover object-center w-full p-2 h-72 "
              />

              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2
                    title={blog.title}
                    className="lg:text-3xl text-2xl font-bold capitalize tracking-wide"
                  >
                    {blog.title.substring(0, 15)}
                  </h2>
                  <p
                    title={blog.shortDescription}
                    className="text-gray-800 text-sm lg:text-xl"
                  >
                    {blog.shortDescription.substring(0, 80)}...
                  </p>
                  <p className="text-blue-500 font-semibold">{blog.category}</p>
                </div>
                <div className="flex space-x-3">
                  <NavLink
                    to={`/blogDetails/${blog._id}`}
                    className="flex  items-center justify-center lg:w-full w-44 p-2 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                  >
                    Details
                  </NavLink>
                  <button
                    onClick={() => handleAddWishList(blog._id)}
                    className="flex items-center justify-center lg:w-full w-44 p-2 tracking-wide rounded-md bg-blue-500 text-gray-50"
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

export default HomePageCard;
