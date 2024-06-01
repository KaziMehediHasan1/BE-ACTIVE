import { toast } from "react-toastify";
import write from "../.././assets/write.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const AddBlog = () => {
  const user = useContext(AuthContext);
  console.log(user.user.photoURL);
  const userName = user?.user.displayName;
  const userPhoto = user?.user.photoURL;
  const users = {userName, userPhoto}
  // console.log(users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const shortDescription = form.sDescription.value;
    const longDescription = form.longDescription.value;
    const photoURL = form.photoURL.value;
    const blog = {
      title,
      category,
      shortDescription,
      longDescription,
      photoURL,
      users
    };
    console.log(blog);
    fetch("http://localhost:5000/addBlog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Blog added successfully");
          form.reset();
        }
      });
  };
  return (
    <div className="mt-20 mb-10">
      <section className="p-6 bg-gray-100 text-gray-900">
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="container font-Fraunces flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 mt-4 col-span-full lg:col-span-1">
              <img src={write} alt="" />
            </div>

            {/* Input Field */}
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full w-full sm:col-span-4">
                <label htmlFor="firstname" className="text-sm font-semibold">
                  Blog Title
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  placeholder="Enter a blog title"
                  name="title"
                  className="w-full hover:bg-blue-100 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="col-span-full  sm:col-span-1 w-full">
                <label htmlFor="lastname" className="text-sm font-semibold">
                  Category
                </label>
                <div>
                  <select
                    name="category"
                    className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                  >
                    <option value="Education" className="bg-white p-4">
                      Education
                    </option>
                    <option
                      value="Technology"
                      selected
                      className="bg-white p-4"
                    >
                      Technology
                    </option>
                    <option value="Health" className="bg-white p-4">
                      Health
                    </option>
                    <option value="Travel" className="bg-white p-4">
                      Travel
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-5 sm:col-span-4">
                <label htmlFor="email" className="text-sm font-semibold">
                  Short Description
                </label>
                <input
                  id="Description"
                  type="text"
                  required
                  name="sDescription"
                  placeholder="Enter a short Description"
                  className="w-full rounded-md hover:bg-blue-100  focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="address" className="text-sm font-semibold">
                  Long Description
                </label>
                <textarea
                  id="longDescription"
                  type="text"
                  required
                  name="lg-Description"
                  placeholder="Enter a Long Description"
                  className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="address" className="text-sm font-semibold">
                  PhotoURL
                </label>
                <input
                  id="photoUrl"
                  type="url"
                  name="photoURL"
                  required
                  placeholder="photoURL"
                  className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <br />
              <div className="col-span-full w container space-x-4 sm:col-span-2">
                <button
                  type="submit"
                  className="my-4 w-full p-2 px-6 font-semibold rounded bg-blue-500 hover:bg-blue-300 hover:text-black shadow-lg text-gray-100"
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
