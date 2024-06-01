import { NavLink, useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div className="font-Fraunces grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-gray-100 p-6 shadow-blue-100 mt-4">
      {blogs.map((blog) => (
        <div key={blog._id} className="md:flex md:justify-center rounded-md p-4 lg:shadow-lg">
          <div className="lg:w-96 md:w-[950px] md:h-[530px] lg:h-[530px] ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
            <img
              src={blog.photoURL}
              alt=""
              className="object-cover object-center w-full p-2 rounded-t-md h-72"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                {/* title */}
                <h2 className="text-3xl hover:underline font-semibold tracking-wide">
                  {blog.title.slice(0,10)}...
                </h2>
                {/* category */}
                <p className="text-gray-800">
                  {blog.shortDescription.slice(0,80)}...
                </p>
                {/* Short Description */}
                <p className="text-red-500 font-semibold">{blog.category}</p>
              </div>
              {/* button */}
              <div className="flex space-x-3">
                <NavLink to={`/blogDetails/${blog._id}`} className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">
                  Details
                </NavLink>
                <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
