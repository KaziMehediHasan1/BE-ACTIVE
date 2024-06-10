import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";


const WishList = () => {
  const { user } = useContext(AuthContext);
  const [wishList, setWishList] = useState([]);
  console.log(wishList);
  const url = `${import.meta.env.VITE_API_URL}/wishList?userMail=${user?.email}`;
  useEffect(() => {
    if(user){
      fetch(url)
      .then((res) => res.json())
      .then((data) => setWishList(data));
    }
  }, [user,url]);
  console.log(user);

  const handleDeleteItems = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/wishList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data);
        console.log(wishList);
        if (data.deletedCount > 0) {
          swal({
            title: "Deleted Successfully",
          });
          const remaining = wishList.filter((blog) => blog._id !== id);
          console.log(remaining);
          setWishList(remaining);
        }
      });
  };
  return (
    <div className="bg-slate-300 shadow-md p-4 mt-10 mb-10">
      <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {wishList?.map((blog) => (
          <div
            key={blog._id}
            className="font-Fraunces bg-gray-100 rounded-md p-4 shadow-blue-100 mt-8"
          >
            <div className="rounded-md lg:p-4 ">
              <div className="lg:w-96 lg:h-[530px] md:h-[540px] ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
                <img
                  src={blog.photoURL}
                  alt=""
                  className="object-cover object-center w-full p-2 rounded-t-md h-72"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    {/* title */}
                    <h2 className="text-3xl font-bold capitalize tracking-wide">
                      {blog.title}
                    </h2>
                    {/* category */}
                    <p className="text-gray-800">{blog.shortDescription.substring(0,90)}...</p>
                    {/* Short Description */}
                    <p className="text-red-500 font-semibold">
                      {blog.category}
                    </p>
                  </div>
                  {/* button */}
                  <div className="flex space-x-3">
                    <NavLink
                      to={`/wishListBlogDetails/${blog._id}`}
                      className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                    >
                      Details
                    </NavLink>
                    <button
                      onClick={() => handleDeleteItems(blog._id)}
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                    >
                      Remove
                    </button>
                  </div>
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
