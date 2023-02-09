import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import { openModal } from "../../redux/feature/ModalSlice";
import { addProductId } from "../../redux/feature/productSlice";
import GlobalFilter from "./config/GlobalFilter";
import Pagination, { useCustomPagination } from "./config/Paginations";

const Table = ({ columns, data, deleteItem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const imageUrl = process.env.REACT_APP_IMG_URL;

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
      <div className="-my-2 overflow-x-auto  -mx-4 sm:-mx-6 w-full lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-y-scroll h-[68vh] border-b border-gray-200 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-gray-10">
                {headerGroups?.map((headerGroup) => (
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
                className="bg-white divide-y  divide-gray-200"
              >
                {page?.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row?.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="px-6 py-6  whitespace-nowrap"
                          >
                            {cell.column.id === "id" ? null : cell.column.id ===
                              "image" ? (
                              <img
                                className="w-[100px] rounded"
                                src={`${imageUrl}${cell.row.original.image}`}
                                alt="image"
                              />
                            ) : cell.column.id === "action" ? (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => navigate(cell.row.original.id)}
                                  className="border hover:bg-yellow-300 transition-all hover:text-white rounded-lg px-[10px] py-1"
                                >
                                  <i className="fa-solid fa-info"></i>
                                </button>
                                <button
                                  onClick={() => {
                                    dispatch(openModal("open"));
                                    dispatch(
                                      addProductId(cell.row.original.id)
                                    );
                                  }}
                                  className="border hover:bg-red-500 transition-all hover:text-white rounded-lg px-[10px] py-1"
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                                <button
                                  onClick={() => 
                                    navigate(`update/${cell.row.original.id}`)
                                  }
                                  className="border hover:bg-green-500 transition-all hover:text-white rounded-lg px-[10px] py-1"
                                >
                                  <i className="fa-solid fa-pencil"></i>
                                </button>
                              </div>
                            ) : cell.column.id === "content" ? (
                              <span className="w-[150px]">
                                {cell.render("Cell")}
                              </span>
                            ) : cell.column.id === "price" ? (
                              <span>{cell.render("Cell")} so'm</span>
                            ) : (
                              <span>{cell.render("Cell")}</span>
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
          </div>
          <Pagination
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            nextPage={nextPage}
            canNextPage={canNextPage}
            paginationRange={paginationRange}
            pageIndex={pageIndex}
            gotoPage={gotoPage}
          />
          {/* Pagination End */}
        </div>
      </div>
    </div>
  );
};

export default Table;
