import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const AllBlogs = blogs.find((blog) => blog._id == id);
  const { photoURL, longDescription, shortDescription, title } =
    AllBlogs;
  console.log(AllBlogs);
  return (
    <div className="container mt-10 md:p-8 p-6">
      <div className="mx-auto text-center">
      <h1 className="text-4xl font-semibold font-Fraunces">{title}</h1>
      <img className="mx-auto mt-4 lg:w-[1080px]" src={photoURL} alt="" />
      <p className="mt-4 text-xl">{shortDescription}</p>
      <p className="mt-4 font-Fraunces">{longDescription}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
