import { useEffect } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import GlobalFilter from "./GlobalFilter";
import Pagination, { useCustomPagination } from "./Paginations";

const TableItem = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex } = state;
  const paginationRange = useCustomPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
  });

  useEffect(() => {
    setPageSize(5);
  }, [setPageSize]);

  return (
    <div className="mt-2 flex flex-col">
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-gray-10">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        className="px-6 py-5 text-left text-20 font-medium text-gray-400 uppercase rounded-sm tracking-wider"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-10 whitespace-nowrap"
                          >
                            {cell.column.id === "image" ? (
                              <img
                                src={cell.render("Cell")}
                                alt="category image"
                              />
                            ) : cell.column.id === "action" ? (
                              <>
                                <button className="border hover:bg-red-500 transition-all hover:text-white rounded-lg px-[10px] py-1">
                                  delete
                                </button>{" "}
                                <button className="border hover:bg-yellow-300 transition-all hover:text-white rounded-lg px-[10px] py-1">
                                  edit
                                </button>
                              </>
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Pagination start */}
            <Pagination
              previousPage={previousPage}
              canPreviousPage={canPreviousPage}
              nextPage={nextPage}
              canNextPage={canNextPage}
              paginationRange={paginationRange}
              pageIndex={pageIndex}
              gotoPage={gotoPage}
            />
          </div>
          {/* Pagination End */}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
