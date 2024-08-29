import { useState } from "react";


import { FaTrashAlt } from "react-icons/fa";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
import { MdAdd, MdModeEdit } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import HeadingCard from "../AllCards/HeadingCard";
import DataTableInfo from "../Dashboard/DashboardCards/DataTableInfo";
import ButtonHead from "../Header/ButtonHead";

const initialRoles = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "User",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Super Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "Administrator",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Fbar_food_1715686767301.png?alt=media&token=9429a78b-4062-42bb-8274-3848f4df8626",
    price: "$20",
    resturant: "Hsa",
    category: "Burger",
    publish: true,
    name: "User",
  },
];

const Food = () => {
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
  const handlecategories = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("categories");
  };
  const handleeprice = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    const sortedRoles = [...roles].sort((a, b) => {
      if (a.name < b.name) return newDirection === "asc" ? -1 : 1;
      if (a.name > b.name) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setRoles(sortedRoles);
    setSortDirection(newDirection);
    setSortColumn("price");
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
    <div className="mx-5 my-3 shadow-md hover:shadow-lg">
      <ButtonHead tab1={"Food List"} tab2={"Create Food"} link={"/food-details"}/>
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
              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Images
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
                  onClick={handleeprice}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Price </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "price" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "price" && sortDirection === "desc"
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
                  <h1> Resturant </h1>
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
                  onClick={handlecategories}
                  className="flex items-center justify-between w-full gap-1"
                >
                  <h1> Categories </h1>
                  <div className="flex flex-col">
                    <TbTriangleFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "categories" && sortDirection === "asc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                    <TbTriangleInvertedFilled
                      className={`transition-colors text-xs ${
                        sortColumn === "categories" && sortDirection === "desc"
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </button>
              </th>

              <th className="px-4 py-2 border text-left bg-[#F8FAFD]">
                Publish
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
                <td className="px-4 py-2 border  text-center ">
                  <img
                    src={role.img}
                    alt=""
                    className="rounded-md w-10
                  h-14"
                  />
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-sm hover:text-black">
                  {role.name}
                </td>
                <td className="px-4 py-2 border text-left text-green1 text-sm ">
                  {role.price}
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                  {role.resturant}
                </td>
                <td className="px-4 py-2 border text-left text-primary-900 text-sm">
                  {role.category}
                </td>
                <td className="px-4 py-2 border text-left">
                  <div className="flex items-center justify-center ">
                    <div
                      onClick={() => {
                        const updatedRoles = [...roles];
                        updatedRoles[startIndex + index].publish =
                          !updatedRoles[startIndex + index].publish;
                        setRoles(updatedRoles);
                      }}
                      className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer ${
                        role.publish ? "bg-green-500" : "bg-primary-900"
                      }`}
                    >
                      <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform ${
                          role.publish ? "translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 border text-left flex gap-2">
                  <button>
                    <MdModeEdit className="p-1 bg-green1 text-[1.6rem] rounded-full text-white" />
                  </button>
                  <button>
                    <FaTrashAlt className="p-1 text-[1.6rem]  bg-primary-900 text-white rounded-full" />
                  </button>
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

export default Food;
