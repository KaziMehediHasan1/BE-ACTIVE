"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export const Login = () => {
  const { loginUser, googleSingIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(navigate);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed");
      });
  };

  // Google Login...
  const handleGoogleLogin = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Google Login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google Login Failed");
      });
  };
  return (
    <div className="container max-w-md mx-auto">
      <form
        onSubmit={handleLogin}
        className="flex max-w-md mx-auto mt-28 flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="enter email"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            name="password"
            type="password"
            required
            shadow
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
          <p className="ml-2">
            Are you new?{" "}
            <Link className="text-cyan-600 " to="/register">
              register
            </Link>
          </p>
        </div>
        <Button type="submit">Login</Button>
      </form>
      <div className="flex space-x-4 justify-center mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full p-2 rounded-md flex justify-center space-x-4 items-center bg-gray-300 text-black font-Fraunces "
        >
          <FcGoogle className="w-6 h-6"></FcGoogle>
          <span className="text-xl">Google</span>
        </button>
        <button className="w-full p-2 rounded-md flex justify-center space-x-4 items-center  bg-gray-300 text-black font-Fraunces">
          <FaFacebook className="w-6 h-6 text-blue-700"></FaFacebook>
          <span className="text-xl ">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
