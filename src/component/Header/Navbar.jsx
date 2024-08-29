import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine, RiUserStarFill } from "react-icons/ri";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="p-2 flex h-12 justify-between items-center">
        <div className="relative flex p-0 items-center ">
          <select name="" id="" className="mx-2 h-6 bg-primary-500 rounded text-white">
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-primary-900 rounded-full text-3xl focus:outline-none">
            <RiUserStarFill />
          </div>
          <button onClick={toggleDropdown}>
            <IoMdArrowDropdown className="w-16 text-white" />
          </button>
          {dropdownOpen && (
            <div className="absolute top-12 border right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
              <div className="flex flex-col items-center p-2 border-b">
                <img
                  src="https://foodie.siswebapp.com/images/users/user-new.png"
                  alt="User"
                  className="rounded-full h-10 mb-2"
                />
                <span className="text-gray-700 font-bold">
                  Super Administrator
                </span>
                <span className="text-gray-500 text-sm">
                  Super Administrator
                </span>
              </div>
              <div>
                <button className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center">
                  <FaUser className="mr-2" /> Profile
                </button>
                <button className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center">
                  <span className="mr-2">&#x23FB;</span> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
