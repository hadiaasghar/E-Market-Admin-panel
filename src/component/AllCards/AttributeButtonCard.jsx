import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AttributeButtonCard = ({ name, link }) => {
  return (
    <div className=" mx-5  flex flex-col justify-center items-center">
      <fieldset className="border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
        <Link to={link} className="text-md font-semibold  bg-primary-900 text-white px-2 py-1 rounded">
          Create {name} Attributes
        </Link>
        <label htmlFor="">Name</label>
        <input
          type="text"
          className=" block  w-full p-2 border bg-[#F5F5F5] border-gray-300 rounded"
        />
        <h1 className="text-sm text-gray-400">Insert Name</h1>
      </fieldset>
      <div className="flex items-center justify-center gap-4 py-4">
        <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2">
          <FaFileInvoice /> Save
        </button>
        <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2">
          <FaArrowRotateLeft /> Back
        </button>
      </div>
    </div>
  );
};

export default AttributeButtonCard;
