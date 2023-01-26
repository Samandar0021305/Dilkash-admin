import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const useCustomPagination = ({
  totalPageCount,
  siblingCount = 1,
  currentPage,
}) => {
  return useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, siblingCount, currentPage]);
};

const Pagination = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  paginationRange,
  pageIndex,
  gotoPage,
}) => {
  return (
    <div className="py-3 flex items-center text-center justify-center pt-10">
      <div className="flex-1 flex justify-between md:hidden">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      <div
        className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        aria-label="Pagination"
      >
        <div
          className="relative z-0 inline-flex items-center ml-auto mr-auto rounded-md shadow-sm space-x-10"
          aria-label="Pagination"
        >
          {paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <div key={index}>...</div>;
            }

            if (pageNumber - 1 === pageIndex) {
              return (
                <div
                  key={index}
                  className=" active:bg-gray-500 w-[30px] border-gray-400 border-1 active:border-gray-300"
                  onClick={() => gotoPage(pageNumber - 1)}
                >
                  {pageNumber}
                </div>
              );
            }

            return (
              <div
                key={index}
                className="active:bg-gray-500 w-[30px] border-gray-400 border-1 active:border-gray-300"
                onClick={() => gotoPage(pageNumber - 1)}
              >
                {pageNumber}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
