"use client";
import { Table } from "flowbite-react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const FeaturedBlogs = () => {
  const user = useContext(AuthContext);
  const allBlogs = useLoaderData();
  const blogs = allBlogs.filter((blog) => blog.longDescription.length);
  const bigger = blogs.sort((a, b) => b - a).slice(0, 10);

  console.log(bigger);
  // console.log(blogs);
  // console.log(allBlogs);
  console.log(user);

  return (
    <div>
      {
        bigger.map((blogs, index)=> (<div key={blogs._id} className="mt-10 font-Fraunces bg-blue-50 p-4 rounded-sm">
        <h1 className="text-center font-Fraunces font-semibold text-2xl mb-8">
          Top <span className="text-blue-500">10</span> Blog
        </h1>
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Serial</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Owner</Table.HeadCell>
              <Table.HeadCell>Profile</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="">{blogs.title}</Table.Cell>
                <Table.Cell>{user?.user.displayName}</Table.Cell>
                <Table.Cell>
                  <img src={user?.user.photoURL} alt="" />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>))
      }
    </div>
  );
};

export default FeaturedBlogs;
