import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import CardHeader from "../../AllCards/CardHeader";
import HeadingCard from "../../AllCards/HeadingCard";
import DataTableInfo from "../../Dashboard/DashboardCards/DataTableInfo";
import TitleHead from "../../Header/TitleHead";
import ButtonHead from "../../Header/ButtonHead";

const Coupans = () => {
  const Orders = [
    {
      code: "CRNI",

      discount: "%25",
      privacy: (
        <div>
          <h1 className="text-sm text-white font-semibold bg-green-300 px-2 py-1 rounded-md border text-center">
            Public
          </h1>
        </div>
      ),
      restaurant: "HSA",
      expires: "Tue Sep 24 2024 11:29:59 AM",
      publish: false,
      description: " Buy 1 Get 1 Free on All Pastries!",
    },
    {
      code: "CRNI",

      discount: "%25",
      privacy: (
        <div>
          <h1 className="text-sm text-white font-semibold bg-pink-600 px-2 py-1 rounded-md border text-center">
            Private
          </h1>
        </div>
      ),
      restaurant: "HSA",
      expires: "Tue Sep 24 2024 11:29:59 AM",
      publish: true,
      description: " Buy 1 Get 1 Free on All Pastries!",
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

  const handlediscount = (column) => {
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

  const handleprivacy = (column) => {
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

  const handleexpires = (column) => {
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

  const handlerestaurant = (column) => {
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
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedRoles = new Set(roles.map((_, index) => index));
      setSelectedRoles(newSelectedRoles);
    } else {
      setSelectedRoles(new Set());
    }
  };

  //   --------------------
  const [roles, setRoles] = useState(Orders);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
  const rolesPerPage = 5;

  const handleRoleSelection = (index) => {
    const newSelectedRoles = new Set(selectedRoles);
    if (newSelectedRoles.has(index)) {
      newSelectedRoles.delete(index);
    } else {
      newSelectedRoles.add(index);
    }
    setSelectedRoles(newSelectedRoles);
  };

  const startIndex = currentPage * rolesPerPage;
  const displayedRoles = roles.slice(startIndex, startIndex + rolesPerPage);

  return (
    <>
    {/* <TitleHead title={"Coupons"} desc={"Coupons"}/> */}
    <div className="shadow-sm shadow-primary-300 rounded">
      {/* <CardHeader
        createmenu="Create Coupans"
        createlink={"/editcoupons"}
        listmenu="Coupans List"
      /> */}
      <ButtonHead tab1={"Coupons List"} tab2={"Create Coupons"} link={"/editcoupons"} />
      <HeadingCard />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border bg-[#F8FAFD]">
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
                  <FaTrashAlt className="text-red1" />
                  <span className="font-bold">All</span>
                </div>
              </th>

              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Code </h1>
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
                  onClick={() => handlediscount("discount")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> DisCount </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "discount" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "discount" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleprivacy("privacy")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Privacy </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "privacy" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "privacy" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handlerestaurant("restaurant")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Restaurant </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "restaurant" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "restaurant" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleexpires("expires")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Expiers At </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "expires" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "expires" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Enabled
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
                  <td className=" px-4 py-2 border text-left text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="">
                        {showQuantity[index] ? (
                          <IoMdRemoveCircle
                            className="text-primary-500 text-xl border border-gray-400 rounded-full cursor-pointer"
                            onClick={() => toggleQuantity(index)}
                          />
                        ) : (
                          <IoMdAddCircle
                            className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                            onClick={() => toggleQuantity(index)}
                          />
                        )}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedRoles.has(startIndex + index)}
                          onChange={() =>
                            handleRoleSelection(startIndex + index)
                          }
                        />
                      </div>
                    </div>
                  </td>{" "}
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    <h1 className="text-red1 hover:text-black truncate">
                      {order.code}
                    </h1>
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.discount}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.privacy}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm  ">
                    {order.restaurant}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm  ">
                    {order.expires}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    <div className="flex items-center justify-center ">
                      <div
                        onClick={() => {
                          const updatedRoles = [...roles];
                          updatedRoles[startIndex + index].publish =
                            !updatedRoles[startIndex + index].publish;
                          setRoles(updatedRoles);
                        }}
                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                          order.publish ? "bg-green-300" : "bg-primary-500"
                        }`}
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
                            order.publish ? "translate-x-6" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
                {showQuantity[index] && (
                  <tr className="">
                    <td colSpan="6" className="py-2">
                      <div className="text-gray-500 font-semibold flex flex-col gap-2">
                        <div className=" flex justify-center items-center gap-8 ">
                          <button className="text-gray-500 font-semibold flex justify-between items-center">
                            <h1>Description:</h1>
                            <p>{order.description}</p>
                          </button>
                        </div>
                        <div className="flex justify-center items-center gap-8">
                          Actions:
                          <Link to="/editcoupans">
                            <MdModeEdit className="p-1 bg-green1 text-[1.6rem] rounded-full text-white" />
                          </Link>
                          <button>
                            <FaTrashAlt className="p-1 text-[1.6rem] bg-red1 text-white rounded-full" />
                          </button>
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

export default Coupans;
