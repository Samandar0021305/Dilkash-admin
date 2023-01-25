import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-blue-600 cursor-pointer underline">CoreUI </p>
          <p className="text-sm text-gray-700 font-medium flex items-center ">
            {" "}
            © 2022 creativeLabs
          </p>
        </div>
        <div className="flex">
          <p className="text-sm text-gray-700 font-medium flex items-center">
            Powered by
          </p>
          <p className="text-blue-600 cursor-pointer underline">
            CoreUI ReactAdmin & Dashboard Template
          </p>
        </div>
      </div>
    </>
  );
}
