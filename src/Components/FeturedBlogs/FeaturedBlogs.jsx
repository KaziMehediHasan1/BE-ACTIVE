
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
const FeaturedBlogs = () => {
  const allBlogs = useLoaderData();
  const blogs = allBlogs.filter((blog) => blog.longDescription.length);
  const bigger = blogs.sort((a, b) => b - a).slice(0, 10);

  // console.log(Allblog);
  // console.log(blogs);
  // console.log(allBlogs);

  return (
    <div className="mt-10">
      <h1 className="text-center font-Fraunces font-semibold text-2xl mb-8">
          Top <span className="text-blue-500">10</span> Blog
        </h1>
      
         <div className="mt-10 font-Fraunces bg-blue-50 p-4 rounded-sm">
          {
            bigger.map(blog=> <FeaturedCard key={blog._id} blog={blog}></FeaturedCard>)
          }
      </div>
    </div>
  );
};

export default FeaturedBlogs;
