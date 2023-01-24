/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { sidebar } from "../../utils/Constants";

export default function Sidebar() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  {sidebar.map((item) => {
                    return (
                      <div className="flex">
                        <img width="30" height="10" src={item.icon} alt={item.name}/>
                      <a
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md">
                        {item.name}
                        </a>
                      </div>
                    
                    );
                  })}
                  {/* <a
                    href="#!"
                    className="flex items-center p-2 space-x-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6">
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                    <span>Main Dashboard</span>
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}