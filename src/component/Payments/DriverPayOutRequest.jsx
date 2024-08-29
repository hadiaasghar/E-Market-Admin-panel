import React, { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd, MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import AscDescButton from "../AllCards/AscDescButton";

const initialRoles = [
  {
    amount: "	€6",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "test",
    widthrow: "Bank Transfer",
    name: "Ken driver",
    manulpay: (
      <button className="text-white bg-[#117A8B] text-sm hover:shadow-md px-3 py-1 rounded-md">
        Manual Pay
      </button>
    ),
    cancelrequest: (
      <button className="text-white bg-primary-900 text-[.7rem] hover:shadow-md px-3 py-1 rounded-md">
        Cancel Request
      </button>
    ),
  },
  {
    amount: "	€11",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "FromApp",
    widthrow: "RozyPay",
    name: "Ken driver",
    payonline: (
      <button className="text-white bg-[#26DAD2] text-sm hover:shadow-md px-3 py-1 rounded-md">
        PayOnline
      </button>
    ),
    manulpay: (
      <button className="text-white bg-[#117A8B] text-sm hover:shadow-md px-3 py-1 rounded-md">
        Manual Pay
      </button>
    ),
    cancelrequest: (
      <button className="text-white bg-primary-900 text-[.7rem] hover:shadow-md px-3 py-1 rounded-md">
        Cancel Request
      </button>
    ),
  },
  {
    amount: "	€116",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "FromApp",
    widthrow: "RozyPay",
    name: "Ken driver",
    payonline: (
      <button className="text-white bg-[#26DAD2] text-sm hover:shadow-md px-3 py-1 rounded-md">
        PayOnline
      </button>
    ),
    manulpay: (
      <button className="text-white bg-[#117A8B] text-sm hover:shadow-md px-3 py-1 rounded-md">
        Manual Pay
      </button>
    ),
    cancelrequest: (
      <button className="text-white bg-primary-900 text-[.7rem] hover:shadow-md px-3 py-1 rounded-md">
        Cancel Request
      </button>
    ),
  },
  {
    amount: "	€141",
    date: "Sun Aug 2023 11:23:00 Pm ",
    note: "FromApp",
    widthrow: "RozyPay",
    name: "Ken driver",
    payonline: (
      <button className="text-white bg-[#26DAD2] text-sm hover:shadow-md px-3 py-1 rounded-md">
        PayOnline
      </button>
    ),
    manulpay: (
      <button className="text-white bg-[#117A8B] text-sm hover:shadow-md px-3 py-1 rounded-md">
        Manual Pay
      </button>
    ),
    cancelrequest: (
      <button className="text-white bg-primary-900 text-[.7rem] hover:shadow-md px-3 py-1 rounded-md">
        Cancel Request
      </button>
    ),
  },
]; // Example roles

const DriverPayOutRequest = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  // const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

  const handleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("name");
  };

  const handleamount = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("amount");
  };
  const handlenote = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("note");
  };
  const handledate = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("date");
  };
  const handleadminnote = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("adminnote");
  };
  const handlestatus = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("status");
  };
  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <div className="shadow-lg">
      <div className="flex flex-wrap justify-center gap-2 bg-[#F7F7F7] px-4  rounded shadow-sm hover:shadow-md">
        <button className="bg-primary-900 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
          <TfiMenuAlt />
          Driver Payouts Request
        </button>
      </div>
      <HeadingCard />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handleSort}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Driver </h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "name" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "name" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="name" />
                </button>
              </th>

              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handleamount}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1>Paid Amount</h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "amount" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "amount" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="amount" />
                </button>
              </th>
              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handlenote}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Note</h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "note" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "note" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="note" />
                </button>
              </th>
              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handledate}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1>Paid Date</h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "date" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "date" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="date" />
                </button>
              </th>
              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handlestatus}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Status</h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "status" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "status" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="status" />
                </button>
              </th>
              <th className="px-4 py-2 border text-left text-sm">
                <button
                  onClick={handleadminnote}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Withdrow Method</h1>
                  {/* <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${sortColumn === "adminnote" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${sortColumn === "adminnote" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                        }`}
                    />
                  </div> */}
                  <AscDescButton sortColumn={sortColumn} sortDirection={sortDirection} column="adminnote" />
                </button>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedRoles.map((role, index) => (
              <tr key={index} className="hover:bg-gray-200 text-sm">
                <td className="px-4 py-2 border text-left text-primary-900 ">
                  {role.name}
                </td>
                <td className="px-4 py-2 border text-left text-gray-400 ">
                  {role.amount}
                </td>

                <td className="px-4 py-2 border text-left text-gray-400 ">
                  {role.note}
                </td>
                <td className="px-4 py-2 border text-left text-gray-400 ">
                  {role.date}
                </td>
                <td className="px-1 py-1 border text-center ">
                  <h1 className="text-white bg-[#FFA500] rounded-md text-center py-1">
                    Pending
                  </h1>
                </td>
                <td className="px-4 py-2 border text-left text-gray-400 ">
                  {role.widthrow}
                </td>
                <td className="px-4 py-2 border text-left flex flex-col gap-2">
                  <div className="flex flex-col  gap-2 text-gray-500  font-semibold ">
                    {role.payonline}
                    {role.manulpay}
                    {role.cancelrequest}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={roles.length} totalentries={roles.length} />
    </div>
  );
};

export default DriverPayOutRequest;
