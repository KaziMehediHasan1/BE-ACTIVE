import { Label, Textarea } from "flowbite-react";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const {user} = useContext(AuthContext);
  const { photoURL, longDescription, shortDescription, title, _id } = blogs;
  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;
  const users = { name, email, photo, _id };
  console.log(users);
  const handleAddComment = (e) => {
    e.preventDefault();
    const form = e.target.textArea.value;
    const data = {
      user,
      form,
    };
    fetch(`${import.meta.env.VITE_API_URL}/wishList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Comment Successfully Added");
        }
      });
    console.log(data);
  };

  return (
    <div className="container mt-10 md:p-8 p-6">
      <div className="mx-auto text-center">
        <h1 className="text-4xl font-semibold font-Fraunces">{title}</h1>
        <img className="mx-auto mt-4 lg:w-[1080px]" src={photoURL} alt="" />
        <p className="mt-4 text-xl">{shortDescription}</p>
        <p className="mt-4 font-Fraunces">{longDescription}</p>
      </div>
      <div className="mt-6 flex justify-end mr-10">
      <Link to={`/updateBlog/${_id}`} className="bg-blue-400 p-2 px-8 text-white rounded-md">
        <button>Blog Update</button>
        </Link>
      </div>
      <hr className="mt-6 ml-10 mr-10 to-blue-600" />
      {/* Comment Section */}
      <div className="mt-10 ml-10">
        <form onSubmit={handleAddComment} className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your comment" />
          </div>
          <Textarea
            id="comment"
            name="textArea"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
          <button className="bg-blue-400 mt-2 p-1 hover:shadow-md hover:bg-blue-600 rounded-md text-white font-Fraunces">
            Comment
          </button>
        </form>

        {/* Show Comments.. */}
      </div>
    </div>
  );
};

export default BlogDetails;
