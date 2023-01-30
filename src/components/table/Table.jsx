import React, { useMemo } from "react";
import TableItem from "./config/TableItem";

const Table = ({ data, column }) => {

  const columns = useMemo(() => column);

 

  return (
    <div className="w-full">
      <TableItem columns={columns} data={data} />
    </div>
  );
};

export default Table;
