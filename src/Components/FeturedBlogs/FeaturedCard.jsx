import { Avatar, Table } from "flowbite-react";

const FeaturedCard = ({blog}) => {
  return (
    <div className="overflow-x-auto w-[1500px]">
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
              1
            </Table.Cell>
            <Table.Cell className="">{blog.title}</Table.Cell>
            <Table.Cell>{blog.users.userName}</Table.Cell>
            <Table.Cell>
              <Avatar img={blog.users.userPhoto} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default FeaturedCard;
