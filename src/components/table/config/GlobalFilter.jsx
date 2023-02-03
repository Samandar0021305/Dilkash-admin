import { useState } from "react";
import { useAsyncDebounce } from "react-table";

// Define a UI for filtering

function GlobalFilter({ globalFilter, setGlobalFilter, placeholder }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="flex justify-between  pt-6 pb-5 ">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        className=" sm:w-6/12 lg:w-3/12 rounded-xl border p-2  text-gray-500 outline-none cursor-pointer"
        type="search"
        placeholder="Search..."
      />
    </span>
  );
}

export default GlobalFilter;
