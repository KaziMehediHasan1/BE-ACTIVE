import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
const WishList = () => {
  const { user } = useContext(AuthContext);
  const [wishList, setWishList] = useState([]);
  const url = `${import.meta.env.VITE_API_URL}/wishList?userMail=${
    user?.email
  }`;
  useEffect(() => {
    if (user) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setWishList(data));
    }
  }, [user, url]);

  const handleDeleteItems = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/wishList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal({
            title: "Deleted Successfully",
          });
          const remaining = wishList.filter((blog) => blog._id !== id);
          setWishList(remaining);
        }
      });
  };
  return (
    <div className="p-3 mb-10 lg:w-[1320px] mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:p-6 md:p-0 mt-4">
        {wishList?.map((blog) => (
          <div
            key={blog._id}
            className="md:flex md:justify-center rounded-md p-4"
          >
            <div className="lg:w-[850px] md:w-[560px] lg:h-[515px] h-[450px] mx-auto ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
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
                    onClick={() => handleDeleteItems(blog._id)}
                    className="flex items-center justify-center w-full lg:p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                  >
                    Remove
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

export default WishList;
