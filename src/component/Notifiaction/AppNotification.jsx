import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import {  IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import HeadingCard from "../AllCards/HeadingCard";
import TitleHead from "../Header/TitleHead";

const AppNotification = () => {
  const Orders = [
    {
      subject: "	HI, how may I help you?",
      message: "HI, how may I help you?",
      date: "Wed Jun 12 2024 10:58:25 PM",
      publish: false,
      description: " Buy 1 Get 1 Free on All Pastries!",
      transaction: "Transaction",
      action: "",
    },
  ];

  const [visibleOrders, setVisibleOrders] = useState(Orders.slice(0, 10));
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showQuantity, setShowQuantity] = useState({});

  const handleSort = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const handlesubject = (column) => {
    const newSortDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(newSortDirection);

    const sortedOrders = [...Orders].sort((a, b) => {
      if (a[column] < b[column]) return newSortDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortDirection === "asc" ? 1 : -1;
      return 0;
    });

    setVisibleOrders(sortedOrders.slice(0, 10));
  };

  const toggleQuantity = (index) => {
    setShowQuantity((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  //   --------------------
  // const [roles, setRoles] = useState(Orders);

  // const [currentPage, setCurrentPage] = useState(0);
  // // const [selectedRoles, setSelectedRoles] = useState(new Set());
  // const rolesPerPage = 5;

  // const startIndex = currentPage * rolesPerPage;
  // const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
    <TitleHead title="App Notification" desc="Notifications > App Notification" />
    <div className="bg-white p-4 rounded">
      <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4 py-2 rounded shadow-sm hover:shadow-md">
        <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
          <TfiMenuAlt />
          Notification List
        </button>
      </div>
      <HeadingCard />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {/* <th className="px-4 py-2 border bg-[#F8FAFD]">
                <div className="flex items-center justify-center gap-1 ">
                  <input
                    type="checkbox"
                    className="bg-slate-600 h-4 w-4 "
                    onChange={handleSelectAll}
                    checked={
                      displayedRoles.length > 0 &&
                      displayedRoles.every((_, index) =>
                        selectedRoles.has(startIndex + index)
                      )
                    }
                  />
                  <FaTrashAlt className="text-primary-900" />
                  <span className="font-bold">All</span>
                </div>
              </th> */}

              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Type </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "name" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "name" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handlesubject("subject")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Subject </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "subject" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "subject" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
            {visibleOrders.map((order, index) => (
              <React.Fragment key={index}>
                <tr
                  className={`border-b border-gray-300 ${
                    showQuantity[index] ? "border-black" : ""
                  }`}
                >
                  {/* <td className=" px-4 py-2 border text-left text-gray-400 text-sm">
                    <div className="flex items-center justify-center gap-2">
                     
                    
                    </div>
                  </td>{" "} */}
                  <td className="px-4 flex items-center  gap-2 py-2 border text-left text-gray-400 text-sm">
                    <div className="">
                      {showQuantity[index] ? (
                        <IoMdRemoveCircle
                          className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      ) : (
                        <IoMdAddCircle
                          className="text-green-300 text-xl border border-gray-400 rounded-full cursor-pointer"
                          onClick={() => toggleQuantity(index)}
                        />
                      )}
                    </div>{" "}
                    {order.subject}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.message}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.message}
                  </td>
                </tr>
                {showQuantity[index] && (
                  <tr className="">
                    <td colSpan="3" className="py-2 ">
                      <div className="text-gray-500 font-semibold flex flex-col gap-2">
                        <div className="flex justify-center items-center gap-2">
                          <h1>Date Created:</h1>
                          <p>{order.date}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          Actions:
                          <div className="flex items-center gap-2">
                          {" "}
                            <Link to={"/notifications/edit"}>
                              <MdModeEdit className="p-1 bg-red-400 text-[1.6rem] rounded-full text-white" />
                            </Link>
                            {/* <Link to={"notification/delete"}> */}
                              <MdDelete className="p-1 bg-red-400 text-[1.6rem] rounded-full text-white" />
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={10} totalentries={10} />
    </div>
    </>
    
  );
};

export default AppNotification;
