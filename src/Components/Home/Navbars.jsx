import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
import { AuthContext } from "../AuthProvider/AuthProvider";
export function Navbars() {
  const { user, Logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownVisible, setHomeDropdownVisible] = useState(false);

  const handleToggleBar = () => {
    setHomeDropdownVisible(!isHomeDropdownVisible);
    setIsMenuOpen(!isMenuOpen);
  };
  // Toggle the navigation bar in mobile view
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    setIsMenuOpen(!isMenuOpen);
    Logout()
      .then(() => {
        toast.success("SignOut Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex items-center justify-between font-primary lg:px-10 px-5 p-3 text-gray-800 z-50  w-full transition-all duration-500 top-0 bg-white">
      <Link to="/" className="text-2xl font-primary font-semibold">
        Be Active
      </Link>
      <button
        onClick={handleToggleMenu}
        className="text-gray-600 text-2xl md:hidden"
      >
        {isMenuOpen ? <RxCross1 /> : <CiMenuBurger />}
      </button>

      {/* Desktop navigation */}
      <div
        className={`md:flex items-center justify-center hidden mx-auto lg:gap-14 md:gap-6`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "  font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addBlog"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "  font-semibold"
          }
        >
          Add Blog
        </NavLink>
        <NavLink
          to="/AllBlog"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "  font-semibold"
          }
        >
          All Blogs
        </NavLink>
        <NavLink
          to="/FBlogs"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "  font-semibold"
          }
        >
          Featured Blogs
        </NavLink>
        <NavLink
          to="/wishList"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "  font-semibold"
          }
        >
          WishList
        </NavLink>
      </div>
      {user ? (
        <div className="md:flex items-center hidden">
          <Tooltip title="profile" placement="left-end">
            <div className="lg:w-[40px] md:w-[35px] h-[35px] lg:h-[40px] rounded-full ring ring-offset-2">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="rounded-full"
              />
            </div>
          </Tooltip>
          <NavLink
            onClick={handleLogout}
            className="py-1 lg:px-5 md:px-2 lg:ml-4 md:ml-2 font-medium"
          >
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="  font-primary  font-medium hidden md:block"
        >
          Sign In
        </NavLink>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed bg-white inset-0 z-50 md:hidden">
          <div className="flex items-center justify-between p-3">
            <Link to="/" className="text-2xl gap-2 font-bold font-primary">
              Be Active
            </Link>
            <button
              onClick={handleToggleMenu}
              className="text-gray-600 text-2xl"
            >
              <RxCross1 />
            </button>
          </div>

          <div className="grid grid-cols-1 space-y-3 p-3 items-center">
            <NavLink
              to="/"
              onClick={handleToggleBar}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "  font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addBlog"
              onClick={handleToggleBar}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "  font-semibold"
              }
            >
              Add Blog
            </NavLink>
            <NavLink
              to="/AllBlog"
              onClick={handleToggleBar}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "  font-semibold"
              }
            >
              All Blogs
            </NavLink>
            <NavLink
              to="/FBlogs"
              onClick={handleToggleBar}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "  font-semibold"
              }
            >
              Featured Blogs
            </NavLink>
            <NavLink
              to="/wishList"
              onClick={handleToggleBar}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "  font-semibold"
              }
            >
              WishList
            </NavLink>

            <div>
              {user ? (
                <button onClick={handleLogout} className=" font-medium">
                  Sign Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className=" font-medium"
                >
                  Sign In
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
