import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductId } from "../../redux/feature/productSlice";
import { openModal } from "../../redux/feature/ModalSlice";

const Table2 = ({ columns, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageUrl = process.env.REACT_APP_IMG_URL;
  return (
    <div className="flex flex-col w-[95%] ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-y-scroll  h-[69vh]">
            <table className="min-w-full">
              <thead className="border-b sticky top-0 bg-blue-600 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    #
                  </th>
                  {columns.map((header) => (
                    <th
                      key={header.Header}
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      {header.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((product, index) => (
                  <tr className="border-b" key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img
                        className="w-[120px] h-[70px] rounded"
                        src={`${imageUrl}${product.image}`}
                        alt="image"
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {product.content}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2 ">
                        <button
                          onClick={() => navigate(product.id)}
                          className="border hover:bg-yellow-300 transition-all hover:text-white rounded-lg px-[10px] py-1"
                        >
                          <i className="fa-solid fa-info"></i>
                        </button>
                        <button
                          onClick={() => {
                            dispatch(openModal("open"));
                            dispatch(addProductId(product.id));
                          }}
                          className="border hover:bg-red-500 transition-all hover:text-white rounded-lg px-[10px] py-1"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button
                          onClick={() => navigate(`action/${product.id}`)}
                          className="border hover:bg-green-500 transition-all hover:text-white rounded-lg px-[10px] py-1"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table2;
