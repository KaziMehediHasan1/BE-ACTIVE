import { NavLink, useLoaderData, useParams } from "react-router-dom";

const WishList = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  console.log(blogs, id);
  const AllBlogs = blogs.find((blog) => blog._id == id);
  const { photoURL, shortDescription, title,_id, category } =
    AllBlogs;
  console.log(AllBlogs);
  return (
    <div>
      <div>
        <h1 className="mt-8 animate__slideInLeft text-center font-semibold font-Fraunces text-xl">
          {" "}
          <span className="text-4xl text-blue-600">Recent</span> All Blogs
        </h1>
        <div className="font-Fraunces grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-gray-100 rounded-md p-8 shadow-blue-100 mt-8">
          <div
            className="animate__slideInLeft rounded-md p-4 shadow-lg"
          >
            <div className="w-96 h-[530px] ml-4 mt-2 rounded-md shadow-lg shadow-black-100 bg-gray-50">
              <img
                src={photoURL}
                alt=""
                className="object-cover object-center w-full p-2 rounded-t-md h-72"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  {/* title */}
                  <h2 className="text-3xl font-bold capitalize tracking-wide">
                    {title.slice(0, 12)}
                  </h2>
                  {/* category */}
                  <p className="text-gray-800">
                    {shortDescription.slice(0, 84)}
                  </p>
                  {/* Short Description */}
                  <p className="text-red-500 font-semibold">{category}</p>
                </div>
                {/* button */}
                <div className="flex space-x-3">
                  <NavLink
                    to={`/blogDetails/${_id}`}
                    className="flex  items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-gray-50"
                  >
                    Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
