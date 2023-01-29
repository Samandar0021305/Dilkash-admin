import React, { useMemo } from "react";
import TableItem from "./config/TableItem";

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Catgory image",
        accessor: "image",
      },
      {
        Header: "Category name ",
        accessor: "title",
      },
      {
        Header: "Date",
        accessor: "created_at",
      },
      {
        Header: "Actions",
        accessor: "action",
      },
    ],
    []
  );

  // const data = useMemo(() => customersData(), []);
  console.log(data);

  return (
    <div className="w-full">
      <TableItem columns={columns} data={data} />
    </div>
  );
};

export default Table;
