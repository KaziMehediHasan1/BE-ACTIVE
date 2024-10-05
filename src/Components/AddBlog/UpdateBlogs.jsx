import { useLoaderData } from "react-router-dom";
import update from "../../assets/update.jpg";
import { toast } from "react-toastify";
const UpdateBlogs = () => {
  const blogs = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.LongDescription.value;
    const photoURL = form.photoURL.value;
    const UpdatedData = {
      title,
      category,
      shortDescription,
      longDescription,
      photoURL,
    };
    fetch(`${import.meta.env.VITE_API_URL}/addBlogs/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Update Successful");
        }
      });
  };
  const { photoURL, longDescription, shortDescription, _id, category, title } =
    blogs;

  return (
    <div className="lg:pt-20">
      <section className="p-5 text-gray-900">
        <form
          onSubmit={handleUpdate}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 mt-4 col-span-full lg:col-span-1">
              <img src={update} className="w-[650px] h-[400px]"/>
            </div>

            {/* Input Field */}
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full w-full md:col-span-4">
                <label className="text-sm font-semibold">
                  Blog Title
                </label>
                <input
                  id="title"
                  type="text"
                  defaultValue={title}
                  required
                  placeholder="Enter a blog title"
                  name="title"
                  className="w-full hover:bg-blue-100 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="col-span-full  md:col-span-2 lg:col-span-1">
                <label className="text-sm font-semibold">
                  Category
                </label>
                <div>
                  <select
                    defaultValue={category}
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
              <div className="col-span-full lg:col-span-5 md:col-span-6">
                <label  className="text-sm font-semibold">
                  Short Description
                </label>
                <input
                  id="Description"
                  type="text"
                  defaultValue={shortDescription}
                  required
                  name="shortDescription"
                  placeholder="Enter a short Description"
                  className="w-full rounded-md hover:bg-blue-100  focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="lg:col-span-5 col-span-6">
                <label htmlFor="address" className="text-sm font-semibold">
                  Long Description
                </label>
                <textarea
                  defaultValue={longDescription}
                  id="longDescription"
                  type="text"
                  required
                  name="LongDescription"
                  placeholder="Enter a Long Description"
                  className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <div className="lg:col-span-5 col-span-full">
                <label htmlFor="address" className="text-sm font-semibold">
                  PhotoURL
                </label>
                <input
                  id="photoUrl"
                  type="url"
                  defaultValue={photoURL}
                  name="photoURL"
                  required
                  placeholder="photoURL"
                  className="w-full hover:bg-blue-100  rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-sky-600 border-gray-300"
                />
              </div>
              <br />
              <div className="col-span-full container space-x-4 lg:col-span-5">
                <button
                  type="submit"
                  className="lg:my-4 w-full p-2 px-6 font-semibold rounded bg-blue-500 hover:bg-blue-300 hover:text-black shadow-lg text-gray-100"
                >
                  Update
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateBlogs;
