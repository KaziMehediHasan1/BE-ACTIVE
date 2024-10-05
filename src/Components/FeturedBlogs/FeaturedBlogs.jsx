import { useLoaderData } from "react-router-dom";
import { Avatar, Table } from "flowbite-react";
import { useState } from "react";
const FeaturedBlogs = () => {
  const allBlogs = useLoaderData();
  const blogs = allBlogs.filter((blog) => blog.longDescription.length);
  const [itemsPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(blogs.length / itemsPerPage);
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexFirstItem, indexLastItem);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div className="mt-5  lg:w-[1320px] md:w-[680px] w-[345px] mx-auto">
      <h1 className="text-center uppercase  font-semibold text-2xl mb-8">
        Top <span className="text-blue-500 hover:underline">20</span> Blog
      </h1>
      <div className="mt-10  bg-blue-50 border  border-blue-500 rounded-lg p-4">
        <div className="overflow-x-auto">
          <Table striped className="container">
            <Table.Head>
              <Table.HeadCell>Serial</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Owner</Table.HeadCell>
              <Table.HeadCell>Profile</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {currentItems?.map((blog, index) => (
                <Table.Row
                  key={blog._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="">{blog?.title}</Table.Cell>
                  <Table.Cell>{blog?.users?.userName}</Table.Cell>
                  <Table.Cell>
                    <Avatar img={blog?.users?.userPhoto} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="join flex justify-center items-center pt-5">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="join-item btn hover:btn-primary"
          >
            «
          </button>
          <button className="join-item btn">Page {currentPage}</button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPage}
            className="join-item btn hover:btn-primary"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
