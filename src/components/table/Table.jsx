import React, { useMemo } from "react";
import { customersData } from "./config";
import TableItem from "./config/TableItem";

const Table = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "Deposit",
        accessor: "deposit",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Voucher NO.",
        accessor: "voucherNo",
      },
      {
        Header: "Trans.Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        accessor: "action",
      },
    ],
    []
  );

  const data = useMemo(() => customersData(), []);

  return (
    <div className="w-full">
      <TableItem columns={columns} data={data[0]} />
    </div>
  );
};

export default Table;
