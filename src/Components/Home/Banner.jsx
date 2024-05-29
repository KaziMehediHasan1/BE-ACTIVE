import banner from "../../assets/banner.jpg";
import Newsletter from "./Newsletter";
import RecentBlog from "./RecentBlog";
const Banner = () => {
  return (
    <div className=" mb-14 mt-12">
      <img src={banner} className="lg:h-[850px] relative opacity-30 w-full" />
      <div className="absolute bottom-[480px] container">
        <div className=" flex justify-center items-center font-Fraunces text-4xl">
          <span className="font-bold text-5xl mr-4 text-blue-600 bg-gray-200 bg-opacity-10">
            Be Active
          </span>{" "}
          Your Source for News,{" "}
          <span className="text-3xl text-blue-600">H</span>ealthy,{" "}
          <span className="text-3xl text-blue-600">T</span>ech Innovations, and{" "}
          <span className="text-3xl text-blue-600">E</span>ducation
        </div>
        <div className="flex justify-center mt-14 bg-blue-500">
          <button className="mr-4 border p-2 hover:bg-blue-100 transition-all border-black">
            search
          </button>
          <button>search</button>
        </div>
      </div>
      <RecentBlog></RecentBlog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Banner;
