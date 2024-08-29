import  { useState } from "react";


import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdModeEdit } from "react-icons/md";

import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";
import { Link } from "react-router-dom";

const initialRoles = [
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "User",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Super Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "Administrator",
  },
  {
    email: "kh@gmail.com",
    roles: "Admin",
    name: "User",
  },
]; // Example roles

const AdminUser = () => {
  const [roles, setRoles] = useState(initialRoles);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRoles, setSelectedRoles] = useState(new Set());
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

  const handleemail = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("email");
  };
  const handleroles = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("roles");
  };
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedRoles = new Set(roles.map((_, index) => index));
      setSelectedRoles(newSelectedRoles);
    } else {
      setSelectedRoles(new Set());
    }
  };

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
    <TitleHead title="Admin User" desc="Dashboard > Admin User"/> 
     <div className="mx-5 my-3 shadow-md hover:shadow-lg">
      <ButtonHead tab1="Admin List" tab2="Create Admin" link="/edit-admin"/>
      <HeadingCard  />
      <div className="overflow-x-auto scrollbar-custom">
        <table className="min-w-full bg-white">
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

              <th className="px-4 py-2 border text-left">
                <button
                  onClick={handleSort}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Name </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "name" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${
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
                  onClick={handleemail}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Email </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "email" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${
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
                  onClick={handleroles}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Roles </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "roles" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "roles" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedRoles.map((role, index) => (
              <tr key={index} className="hover:bg-gray-200">
                <td className="px-4 py-2 border w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRoles.has(startIndex + index)}
                    onChange={() => handleRoleSelection(startIndex + index)}
                  />
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.name}
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.email}
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-md">
                  {role.roles}
                </td>
                <td className="px-4 py-2 border text-left">
                  <Link to="/edit-admin" >
                    <MdModeEdit className="p-1 bg-green-500 text-[1.6rem] rounded-full text-white" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DataTableInfo entries={roles.length} totalentries={roles.length} />
    </div>
    </>
   
  );
};

export default AdminUser;
