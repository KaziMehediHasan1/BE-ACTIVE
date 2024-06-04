import { useLoaderData } from "react-router-dom";
import { Avatar, Table } from "flowbite-react";
const FeaturedBlogs = () => {
  const allBlogs = useLoaderData();
  const blogs = allBlogs.filter((blog) => blog.longDescription.length);
  const bigger = blogs.sort((a, b) => b - a).slice(0, 10);

  return (
    <div className="mt-10">
      <h1 className="text-center font-Fraunces font-semibold text-2xl mb-8">
        Top <span className="text-blue-500">10</span> Blog
      </h1>

      <div className="mt-10 font-Fraunces bg-blue-50 p-4 rounded-sm">
         <div className="overflow-x-auto w-[1500px]">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Serial</Table.HeadCell>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Owner</Table.HeadCell>
                <Table.HeadCell>Profile</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                {bigger.map((blog, index)=><Table.Row key={blog._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="">{blog.title}</Table.Cell>
                  <Table.Cell>{blog.users.userName}</Table.Cell>
                  <Table.Cell>
                    <Avatar img={blog.users.userPhoto} />
                  </Table.Cell>
                </Table.Row>)}
              </Table.Body>
            </Table>
          </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
