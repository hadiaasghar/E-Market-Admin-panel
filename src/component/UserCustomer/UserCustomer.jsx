import React, { useState } from "react";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { IoIosEye, IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";

const UserCustomer = () => {
  const Orders = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7",
      name: "	Adnan Attar",

      email: "a**********@gmail.com",

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

  const handleemail = (column) => {
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

  const handledate = (column) => {
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
    <TitleHead title="Users" desc="Users"/>
    <div className="shadow-md p-4 rounded">
      <ButtonHead tab1="User List" tab2="Create Users" link="/create-user"/>
      {/* <CardHeader createmenu="Create User" listmenu="User List" /> */}
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
                  <FaTrashAlt className="text-primary-900" />
                  <span className="font-bold">All</span>
                </div>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">image</th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handleSort("name")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Name </h1>
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
                  onClick={() => handleemail("email")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Email </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "email" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "email" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left">
                <button
                  onClick={() => handledate("date")}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Date </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "date" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-[.5rem] ${
                        sortColumn === "date" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>

              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Active
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Wallet Transaction
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
                            className="text-primary-900 text-xl border border-gray-400 rounded-full cursor-pointer"
                            onClick={() => toggleQuantity(index)}
                          />
                        ) : (
                          <IoMdAddCircle
                            className="text-green-600 text-xl border border-gray-400 rounded-full cursor-pointer"
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
                  <td className="p-1 flex items-center justify-center">
                    <img
                      src={order.image}
                      className="h-10  rounded-md  border"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.name}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.email}
                  </td>
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm">
                    {order.date}
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
                          order.publish ? "bg-green-500" : "bg-primary-900"
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
                  <td className="px-4 py-2 border text-left text-gray-400 text-sm  ">
                    {order.transaction}
                  </td>
                </tr>
                {showQuantity[index] && (
                  <tr className="">
                    <td colSpan="6" className="py-2">
                      <div className="text-gray-500 font-semibold flex flex-col gap-2">
                        <div className="flex justify-center items-center gap-2">
                          Actions:
                          <button>
                            <IoIosEye className="p-1 text-[1.6rem] bg-[#E1E7E9]  rounded-full" />
                          </button>
                          <Link to="/users/edit">
                          
                            <MdModeEdit className="p-1 bg-green-600 text-[1.6rem] rounded-full text-white" />
                          </Link>
                          <button>
                            <FaTrashAlt className="p-1 text-[1.6rem] bg-primary-900 text-white rounded-full" />
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

export default UserCustomer;
