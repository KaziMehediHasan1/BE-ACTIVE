import { NavLink } from "react-router-dom";
import find from "../../assets/Find.svg";
import { Button } from "flowbite-react";
const Error = () => {
  return (
    <div>
      <div>
        <section className="flex items-center h-full w-full p-16 mt-10 text-gray-800">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                <img src={find} alt="" />
              </h2>
              <p className="text-2xl font-bold font-Fraunces md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 text-gray-600 font-Fraunces">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <NavLink to="/">
                <Button className="mx-auto px-4 font-Fraunces" gradientDuoTone="cyanToBlue">
                  Back Home
                </Button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Error;
