import travel from "../../assets/travel.jpg";
import banner from "../../assets/banner.jpg";
import newsletter from "../../assets/news.jpg";
import "animate.css";
import { toast } from "react-toastify";
import HomePageCard from "./HomePageCard";
import { NavLink } from "react-router-dom";
import edu from '../../assets/edu.jpg';
import health from '../../assets/health.jpg';
import tech from '../../assets/tech.jpg';


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
      <img src={banner} className="lg:h-[850px] relative opacity-50 w-full" />
      <div className="absolute md:bottom-[300px] lg:bottom-[480px] container">
        <div className="lg:flex md:ml-5 md:p-4 bg-opacity-50 md:mr-5 relative justify-center items-center font-Fraunces text-4xl">
          <h1 className="font-bold text-5xl mr-4 text-blue-500 bg-gray-200 bg-opacity-10">
            Be Active
          </h1>
          <p>Your Source for News, Healthy, Tech Innovations, and Education</p>
        </div>
        <div className="mt-5 lg:space-x-5 space-x-1 md:space-x-2 flex justify-center">
          <button className="bg-blue-400 px-4 text-white font-Fraunces font-semibold text-2xl p-1 rounded-md">
            Travel
          </button>
          <button className="hover:bg-blue-400 px-4 hover:text-white font-Fraunces font-semibold text-2xl p-1 rounded-md">
            Education
          </button>
          <button className="hover:bg-blue-400 px-4 hover:text-white font-Fraunces font-semibold text-2xl p-1 rounded-md">
            Technology
          </button>
          <button className="hover:bg-blue-400 px-4 hover:text-white font-Fraunces font-semibold text-2xl p-1 rounded-md">
            Health
          </button>
        </div>
      </div>

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
            <NavLink className='mx-auto'>
              <div className="card w-80 h-80 shadow-xl">

                <figure>
                  <img src={travel} />
                </figure>
                <div className="card-body flex justify-center items-center">
                  <h2 className="card-title text-2xl text-orange-400">Travel</h2>
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
                  <h2 className="card-title text-purple-600 text-2xl">Education</h2>
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
                  <h2 className="card-title text-purple-600 text-2xl">Health</h2>
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
