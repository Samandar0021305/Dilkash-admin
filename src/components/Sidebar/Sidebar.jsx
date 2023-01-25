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
                        <img
                          width="30"
                          height="10"
                          src={item.icon}
                          alt={item.name}
                        />
                        <a
                          href="#"
                          className="flex items-center p-2 space-x-3 rounded-md">
                          {item.name}
                        </a>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
