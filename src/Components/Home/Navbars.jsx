"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

export function Navbars() {
  return (
    <Navbar fluid rounded className="bg-gray-50">
      <Navbar.Brand>
        <NavLink to='/' className="self-center whitespace-nowrap font-Fraunces text-2xl font-semibold dark:text-white">
          <span className="text-blue-500 text-3xl">Be</span> Active
        </NavLink>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-Fraunces">Bonnie Green</span>
            <span className="block truncate text-sm font-medium font-Fraunces">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item className="font-Fraunces font-medium">Dashboard</Dropdown.Item>
          <Dropdown.Item className="font-Fraunces font-medium">Settings</Dropdown.Item>
          <Dropdown.Item className="font-Fraunces font-medium">Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="font-Fraunces font-medium">Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-Fraunces font-semibold" : "font-Fraunces font-semibold"
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/addBlog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-Fraunces font-semibold" : "font-Fraunces font-semibold"
            }
          >
            Add Blog
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/AllBlog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-Fraunces font-semibold" : "font-Fraunces font-semibold"
            }
          >
            All Blogs
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/FBlogs"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-Fraunces font-semibold" : "font-Fraunces font-semibold"
            }
          >
            Featured Blogs
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/wishList"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-Fraunces font-semibold" : "font-Fraunces font-semibold"
            }
          >
            WishList
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
