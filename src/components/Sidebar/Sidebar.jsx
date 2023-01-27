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
                      <div className="flex" key={item.name}>
                        <i
                          className={
                            item["icon"] + " mt-2.5  text-xl mr-2 ml-3  w-5"
                          }></i>
                        <a
                          href="#!"
                          className="flex items-center p-2 space-x-3 rounded-md text-base">
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
