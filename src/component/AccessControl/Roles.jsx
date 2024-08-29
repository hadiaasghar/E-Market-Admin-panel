import { useState } from "react";


import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd, MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";

const initialRoles = [
  {
    id: 1,
    name: "Super Administrator"
  },
  {
    id: 2,
    name: "Administrator"
  },
  {
    id: 3,
    name: "User"
  },

]; // Example roles

const Roles = () => {
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
    <div>
      <TitleHead title="Roles" desc=" Roles" />
      <div className="mx-5 my-3 shadow-md hover:shadow-lg">
        <ButtonHead tab1="Roles List" tab2="Create Roles" link="/roles-edit" />
        <HeadingCard />
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
                    <Link to="/roles-edit">
                      {role.name}
                    </Link>

                  </td>

                  <td className="px-4 py-2 border text-left">
                    <button>
                      <MdModeEdit className="p-1 bg-green1 text-[1.6rem] rounded-full text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DataTableInfo entries={roles.length} totalentries={roles.length} />
      </div>
    </div>

  );
};

export default Roles;
