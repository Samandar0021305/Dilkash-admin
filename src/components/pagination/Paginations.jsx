import { useEffect } from "react";

const Pagination = ({ page, paginationHandler }) => {
  const total = localStorage.getItem("total");
  const pageSize = 2;

  let arr = [];
  for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
    arr.push(i);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <span className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </span>
        <span className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </span>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{pageSize}</span> to{" "}
            <span className="font-medium">{page}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <span className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Previous</span>
              <i className="fa-solid fa-angle-left"></i>
            </span>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {arr.map((id) => (
              <span
                onClick={() => paginationHandler(id)}
                key={id}
                aria-current="page"
                className={`  relative cursor-pointer z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium focus:z-20 ${
                  page == id ? "bg-blue-600 text-white" : " text-indigo-600"
                }`}
              >
                {id}
              </span>
            ))}

            <span className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
              <span className="sr-only">Next</span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
