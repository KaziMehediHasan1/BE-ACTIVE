"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
export function Navbars() {
  const { user, Logout } = useContext(AuthContext);
  // console.log(user);
  const handlLogout = (e) => {
    Logout()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar
      fluid
      rounded
      className="bg-gray-50" >
      <Navbar.Brand>
        <NavLink
          to="/"
          className="self-center whitespace-nowrap font-Fraunces text-2xl font-semibold dark:text-white"
        >
          <span className="text-blue-500 text-3xl">Be</span> Active
        </NavLink>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown 
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
        >
          <Dropdown.Header className="sm:z-30">
            <span className="block text-sm font-Fraunces">
              {user?.displayName}
            </span>
            <span className="block truncate text-sm font-medium font-Fraunces">
              {user?.email}
            </span>
          </Dropdown.Header>
        </Dropdown>
        {user ? (
          <Link
            onClick={handlLogout}
            className="flex justify-center items-center ml-4 font-Fraunces"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex justify-center items-center ml-4 font-Fraunces"
          >
            Login
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-Fraunces font-semibold"
                : "font-Fraunces font-semibold"
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/addBlog"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-Fraunces font-semibold"
                : "font-Fraunces font-semibold"
            }
          >
            Add Blog
          </NavLink>
        </Navbar.Link>
        {
          user? (<Navbar.Link>
            <NavLink
              to="/updateBlog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-Fraunces font-semibold"
                  : "font-Fraunces font-semibold"
              }
            >
              Update Blog
            </NavLink>
          </Navbar.Link>) : '' 
        }
        <Navbar.Link>
          <NavLink
            to="/AllBlog"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-Fraunces font-semibold"
                : "font-Fraunces font-semibold"
            }
          >
            All Blogs
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/FBlogs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-Fraunces font-semibold"
                : "font-Fraunces font-semibold"
            }
          >
            Featured Blogs
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/wishList"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-Fraunces font-semibold"
                : "font-Fraunces font-semibold"
            }
          >
            WishList
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
