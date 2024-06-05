import travel from "../../assets/travel.jpg";
import banner from "../../assets/banner.mp4";
import newsletter from "../../assets/news.jpg";
import "animate.css";
import { toast } from "react-toastify";
import HomePageCard from "./HomePageCard";
import { NavLink } from "react-router-dom";
import edu from "../../assets/edu.jpg";
import health from "../../assets/health.jpg";
import tech from "../../assets/tech.jpg";

const Home = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target.email.value;
    if (form) {
      toast.success("Thank you for subscribing to our newsletter");
      form.reset();
    }
  };
  return (
    <div className="mb-14 mt-12">
      <section>
        <div className="bg-blue-600">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              Provident blanditiis cum exercitationem
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Cupiditate minima voluptate temporibus quia? Architecto beatae
              esse ab amet vero eaque explicabo!
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              >
                Get started
              </button>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded border-gray-300 text-gray-50"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <section className=" dark:bg-gray-900 w-5/6 mx-auto mb-12 -mt-20 bg-white rounded-lg shadow-md lg:-mt-40">
          <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Most Readable Blogs
              </h1>

              <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Popular Blogs - TechCrunch, Mashable, HuffPost, The Verge,
                Gizmodo, Wired, Lifehacker, Engadget, Medium, Boing Boing,
                Smashing Magazine, VentureBeat, Gizmodo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
              <div>
                <img
                  className="relative z-10 object-cover w-full rounded-md h-96"
                  src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a
                    href="#"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    Create your first design
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    This series of videos introduces basic Photoshop design
                    techniques. You'll learn how to work with layers, combine
                    images,..
                  </p>

                  <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
              </div>

              <div>
                <img
                  className="relative z-10 object-cover w-full rounded-md h-96"
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a
                    href="#"
                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    How to use sticky note for problem solving
                  </a>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    The Post-up method works in several dimensions. First, it
                    allows people to work simultaneously..
                  </p>

                  <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Recent Blog */}
      <div>
        <HomePageCard></HomePageCard>
      </div>

      {/* Select Your Favorite one.. */}
      <div>
        <h1 className="text-center font-Fraunces text-3xl mt-6">
          {" "}
          <span className="text-blue-600 font-semibold text-6xl">See</span> Your
          Favorite Content
        </h1>
        <div className=" bg-gray-50 container rounded-md mt-8 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <NavLink className="mx-auto">
              <div className="card w-80 h-80 shadow-xl">
                <figure>
                  <img src={travel} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-2xl text-orange-400">
                    Travel
                  </h2>
                </div>
              </div>
            </NavLink>
            {/* Education */}
            <NavLink>
              <div className="card mx-auto w-80 h-80 shadow-xl">
                <figure>
                  <img src={edu} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-purple-600 text-2xl">
                    Education
                  </h2>
                </div>
              </div>
            </NavLink>
            {/* Health */}
            <NavLink>
              <div className="card mx-auto w-80 h-80 shadow-xl">
                <figure>
                  <img src={health} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-purple-600 text-2xl">
                    Health
                  </h2>
                </div>
              </div>
            </NavLink>
            {/* Tech */}
            <NavLink>
              <div className="card mx-auto w-80 h-80 shadow-xl">
                <figure>
                  <img src={tech} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-2xl text-orange-400">Tech</h2>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Newsletter Section.. */}
      <h1 className="mt-8 font-semibold text-center  font-Fraunces text-xl">
        {" "}
        <span className="text-4xl text-blue-600">N</span>ewsletter
      </h1>
      <div className="bg-blue-50 rounded-md mt-5 shadow-lg p-5">
        <div
          className="w-full bg-gray-500  rounded-md"
          style={{
            backgroundImage: `url(${newsletter})`,
          }}
        >
          <div className="container shadow-2xl shadow-yellow-50 flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl font-Fraunces antialiased font-semibold leading-none text-center ">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl font-Fraunces antialiased text-center ">
              Find out about blogs and other news
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-row">
              <input
                type="email"
                name="email"
                placeholder="Enter your mail"
                required
                className="w-3/5 p-3 rounded-l-lg font-Fraunces sm:w-2/3"
              />
              <button
                type="submit"
                className="w-2/5 p-3 font-semibold font-Fraunces rounded-r-lg sm:w-1/3 bg-blue-500 text-gray-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
