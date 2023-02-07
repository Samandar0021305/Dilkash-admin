import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sidebar } from "../../utils/Constants";
import { Context } from "../../Layout";

export default function Sidebar() {
 const navigate = useNavigate()
  const isToogle = useContext(Context).isToogle
  const styled = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
    };
  };


  const changeIcon = (link)=>{
    navigate(link.path)
    
  }

  

  return (
    <div className="flex">
      <div className={isToogle == true ?  " flex flex-col h-screen p-3 bg-white shadow w-60" : "w-[80px] shadow"}>
        <div className="space-y-3">
          <div className="flex items-center">
           {isToogle && <h2 className="text-xl font-bold">Dashboard</h2>}
          </div>
          <div className="flex-1 justify-center">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                {sidebar.map((item,index) => {
                  return (
                    <div key={index}>
                      {isToogle == true ? (
                        <>
                          <div
                            className={isToogle == true ? "flex" : "p-[10px]"}
                            key={item.name}
                          >
                            <i
                              onClick={() => changeIcon(item)}
                              className={
                                item["icon"] +
                                " mt-3 cursor-pointer text-xl mr-3 ml-2  w-5"
                              }
                            ></i>
                            {isToogle && (
                              <NavLink
                                style={styled}
                                to={item.path}
                                className="flex items-center p-2 space-x-3 rounded-md text-base mt-1.5"
                              >
                                {item.name}
                              </NavLink>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div
                            className={"p-[10px] group/item hover:bg-slate-100 ..."
                            }
                            key={item.name}
                          >
                            <i
                              onClick={() => changeIcon(item)}
                              className={
                                item["icon"] +
                                ` cursor-pointer text-xl w-5`
                              }
                            ></i>
                            <p class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ...">
                              {item.name}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
