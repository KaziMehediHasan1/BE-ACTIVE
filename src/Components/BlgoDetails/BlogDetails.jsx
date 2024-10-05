import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Label, Textarea } from "flowbite-react";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const {
    photoURL,
    longDescription,
    shortDescription,
    title,
    _id: detailsId,
  } = blogs;
  const name = user?.displayName;
  const email = user?.email;
  const photo = user?.photoURL;
  const users = { name, email, photo, detailsId };
  const handleAddComment = (e) => {
    e.preventDefault();
    const form = e.target.textArea.value;
    const data = {
      users,
      form,
    };
    fetch(`${import.meta.env.VITE_API_URL}/comment`, {
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
  };

  // comment..
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comment`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);
  const AllComment = data.filter((comment) => comment.users?.detailsId === id);
  return (
    <div className="lg:w-[1320px] md:w-[710px] w-[390px] mx-auto mt-1 md:p-8 p-6">
      <div className="text-center">
        <img
          className="mx-auto mt-4 lg:w-[1000px] w-[500px] h-[380px] lg:h-[700px] rounded-lg"
          src={photoURL}
        />
        <h1 className="text-4xl font-semibold mt-2">{title}</h1>
        <p className="mt-4 text-2xl font-semibold">{shortDescription}</p>
        <p className="mt-4 ">{longDescription}</p>
      </div>

      <div className="mt-5 flex justify-end ">
        {user?.email === blogs.users.userMail && (
          <Link
            to={`/updateBlog/${detailsId}`}
            className="bg-blue-400 p-2 px-8 text-white rounded-md"
          >
            <button>Blog Update</button>
          </Link>
        )}
      </div>

      <hr className="mt-6 ml-10 mr-10 to-blue-600" />

      <div className="mt-10 ">
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
          <button className="bg-blue-400 mt-2 p-1 hover:shadow-md hover:bg-blue-600 rounded-md text-white">
            Comment
          </button>
        </form>

        <div className="mt-6 space-y-5 rounded-lg bg-red-100 lg:p-4 w-[100%]">
          {AllComment.map((comment) => (
            <div key={comment._id} className="flex items-center gap-x-2">
              <img
                className="object-cover w-10 h-10 rounded-lg"
                src={comment.users.photo}
              />

              <div>
                <h1 className="text-lg font-semibold capitalize dark:text-white">
                  {comment?.users.name}
                </h1>
                <p className="text-sm dark:text-gray-400">
                  {comment?.users.email}
                </p>
                <p className="text-blue-600">{comment?.form}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
