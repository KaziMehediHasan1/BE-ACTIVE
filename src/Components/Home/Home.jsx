import travel from "../../assets/travel.jpg";
import newsletter from "../../assets/news.jpg";
import "animate.css";
import { toast } from "react-toastify";
import HomePageCard from "./HomePageCard";
import { NavLink } from "react-router-dom";
import edu from "../../assets/edu.jpg";
import health from "../../assets/health.jpg";
import tech from "../../assets/tech.jpg";
import { FaBookReader, FaPenAlt, FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <div>
      <section className="md:mt-0 w-full mx-auto">
        <div className="bg-blue-600">
          <div className="flex flex-col items-center px-4 py-16 pb-5 md:pb-16 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="lg:text-5xl text-3xl font-bold leading-none md:text-6xl lg:max-w-3xl text-gray-50"
            >
              Active learning boosts retention.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 mb-5 md:text-lg md:mb-12 xl:max-w-3xl text-gray-50"
            >
              Engage actively with content: read, write, discuss, and apply.
              Active participation enhances comprehension, retention, and
              critical thinking, making learning more effective and enjoyable.
            </motion.p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="md:px-8 px-4 py-2 md:py-3 md:m-2 m-3 text-lg md:font-semibold rounded bg-gray-100 text-gray-900"
              >
                Get started
              </button>
              <button
                type="button"
                className="md:px-8 px-4 py-2 md:py-3 md:m-2 m-3 text-lg border rounded border-gray-300 text-gray-50"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <section className="hidden lg:block dark:bg-gray-900 w-[70%] mx-auto mb-12 -mt-20 bg-white rounded-lg shadow-md lg:-mt-40">
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

      {/* Select Your Favorite one.. */}
      <div className="w-full">
        <h1 className="font-bold text-center mt-10 lg:text-3xl text-2xl px-10 md:px-0 uppercase">
          See Your Favorite Content
        </h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ delay: 0.5 }}
          className=" container  mx-auto mt-8 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <NavLink className="mx-auto">
              <div className="card w-80 h-80 shadow-xl">
                <figure>
                  <img src={travel} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-xl">Travel</h2>
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
                  <h2 className="card-title text-xl">
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
                  <h2 className="card-title text-xl">
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
                  <h2 className="card-title text-xl">Tech</h2>
                </div>
              </div>
            </NavLink>
          </div>
        </motion.div>
      </div>

      {/* Recent Blog */}
      <div className="lg:w-[1320px] md:w-[710px] w-[390px] mx-auto">
        <HomePageCard></HomePageCard>
      </div>

      {/* Our Activity */}
      <div className="mt-10">
        <h1 className="font-bold text-center lg:text-3xl text-2xl  uppercase  mt-10">
          Our Activity
        </h1>
        <section className="md:p-16 p-10 my-6 bg-gray-200 text-gray-800">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-violet-600">
                <FaPenAlt className="text-white lg:text-3xl"></FaPenAlt>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="md:text-3xl font-semibold leading-none">200+</p>
                <p className="capitalize text-sm lg:text-xl">writer</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <div className="flex justify-center items-center p-2 align-middle rounded-lg sm:p-4 bg-violet-600">
                <FaRegUser className="text-white lg:text-3xl"></FaRegUser>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="md:text-3xl font-semibold leading-none">7500</p>
                <p className="capitalize text-sm lg:text-xl">Subscribers</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-600">
                <FaBookReader className="text-white lg:text-3xl"></FaBookReader>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="md:text-3xl font-semibold leading-none">500 Blog</p>
                <p className="capitalize text-sm lg:text-xl">EveryDay Read</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="md:h-9 md:w-9 w-5 h-6 text-gray-100"
                >
                  <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="md:text-3xl font-semibold leading-none">74%</p>
                <p className="capitalize text-sm lg:text-xl">Site Visitor</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Section.. */}
      <h1 className="font-bold text-center lg:text-3xl text-2xl uppercase  mt-10">
        Newsletter
      </h1>
      <div className="bg-blue-50 rounded-md mt-4 shadow-lg p-5 lg:w-[1320px] md:w-[100%] mx-auto mb-8">
        <div
          className="object-cover object-center"
          style={{
            backgroundImage: `url(${newsletter})`,
          }}
        >
          <div className="container shadow-2xl shadow-yellow-50 flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="lg:text-5xl text-3xl font-Fraunces antialiased font-semibold leading-none text-center ">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 lg:text-xl text-sm font-Fraunces antialiased text-center">
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
