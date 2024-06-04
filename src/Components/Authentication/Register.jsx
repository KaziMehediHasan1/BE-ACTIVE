"use client";
import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile,googleSingIn } = useContext(AuthContext);
  const [registeredError, setRegisteredError] = useState("");
  const [registeredSuccess, setRegisteredSuccess] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log("peyechi", createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.PhotoUrl.value;

    // Validate password
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password should include at least one lowercase letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should include at least one uppercase letter");
      return;
    } else if(!/[_asdf234$%]/.test(password)){
      toast.error('Password should include at least one special character');
      return;
    }

    // console.log(user);

    // Create User Section..
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisteredSuccess(result.success);
        navigate(location?.state ? location.state : "/");
        updateUserProfile(name, photoURL).then(() => {
          toast.success("Your Registration Successful");
        });
      })
      .catch((error) => {
        // console.error(error);
        setRegisteredError(error.message);
        toast.error("You already registered");
      });
  };

  // google login..
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
        onSubmit={handleRegister}
        className="flex mx-auto mt-20 max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
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
            placeholder="Enter your password"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="PhotoUrl" value="PhotoUrl" />
          </div>
          <TextInput
            id="PhotoUrl"
            name="PhotoUrl"
            type="url"
            placeholder="PhotoURL"
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
        </div>
        <Button type="submit">Register new account</Button>
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

export default Register;
