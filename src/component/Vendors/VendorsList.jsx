import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaList } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { IoIosDocument, IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { Select, MenuItem, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import Alert from "../Pagination/Alert";
import Accordion from "../Pagination/Accordion";
import Pagging from "../Pagination/Pagging";

const VendorsList = ({ allVendorsData }) => {
  // Local state management
  const [show, setShow] = useState(10);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    if (allVendorsData) {
      setVendors(allVendorsData);
    }
  }, [allVendorsData]);

  // Handlers
  const handleChange = (event) => {
    setShow(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleToggleActive = (id) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id ? { ...vendor, active: !vendor.active } : vendor
      )
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setVendors((prevVendors) =>
      prevVendors.map((vendor) => ({ ...vendor, selected: newSelectAll }))
    );
  };

  const handleSelectOne = (id) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id ? { ...vendor, selected: !vendor.selected } : vendor
      )
    );
  };

  const handleShowAlert = () => {
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleToggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const filteredData = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedData = filteredData.slice((page - 1) * show, page * show);

  return (
    <>
      {alertOpen && (
        <Alert
          message="This is for demo, We cannot allow to update content"
          onClose={handleCloseAlert}
        />
      )}

      {/* Header Section */}
      <div className="flex bg-[#F7F7F7] border-2 items-center justify-center mx-auto w-full h-20 rounded-t-lg">
        <button className="bg-primary-900 text-white p-2 flex items-center rounded">
          <FaList className="mr-2 text-xl" />
          Vendors List
        </button>
      </div>

      {/* Vendors List Section */}
      <div className="mx-auto p-4 w-full">
        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row sm:items-center ">
          <div className="flex flex-col sm:flex-row sm:items-center w-full">
            <div className="flex flex-row items-center">
              <span className="text-gray-500 ">Show</span>
              <select value={show} onChange={handleChange} className="mx-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                {[10, 20, 30].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              <span className="text-gray-500">entries</span>
            </div>
            <div className="flex-1 flex justify-start lg:justify-end">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search"
                className="border-b-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-b-orange-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Vendors Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className=" p-1 flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <MdDeleteSweep
                    className="ml-2 text-2xl text-primary-900"
                    onClick={handleShowAlert}
                  />
                  <span
                    className="ml-2 text-primary-900"
                    onClick={handleShowAlert}
                  >
                    All
                  </span>
                </th>
                <th className=" p-1">Image</th>
                <th className=" p-1">Name</th>
                <th className="hidden sm:table-cell  p-1">
                  Email
                </th>
                <th className="hidden sm:table-cell  p-1">
                  Date
                </th>
                <th className="hidden sm:table-cell  p-1">
                  Documents
                </th>
                <th className="hidden sm:table-cell  p-1">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((vendor) => (
                <React.Fragment key={vendor.id}>
                  <tr className="border border-gray-300 text-sm">
                    <td className="flex my-3 h-full justify-center items-center gap-2">
                      <div
                        className={`cursor-pointer p-1 rounded-full ${openAccordion === vendor.id
                            ? "bg-primary-400"
                            : "bg-primary-900"
                          }`}
                        onClick={() => handleToggleAccordion(vendor.id)}
                      >
                        {openAccordion === vendor.id ? (
                          <GrSubtractCircle className="text-white text-xs" />
                        ) : (
                          <IoMdAddCircleOutline className="text-white text-xs" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={vendor.selected || false}
                        onChange={() => handleSelectOne(vendor.id)}
                      />
                    </td>
                    <td className=" p-1 text-center">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-12 h-10 rounded-lg inline-block"
                      />
                    </td>
                    
                    <td className="text-primary-800 p-1">
                      <Link to="/document/edit">
                      {vendor.name}
                      </Link>
                    </td>
                    <td className="hidden sm:table-cell  p-1">
                      {vendor.email}
                    </td>
                    <td className="hidden sm:table-cell  p-1">
                      {vendor.date}
                    </td>
                    <td className="hidden sm:table-cell  p-1">
                      {vendor.documents ? (
                        <Link to="/document-list">
                          <IoIosDocument className="text-2xl text-primary-900" />
                        </Link>
                      ) : (
                        " No"
                      )}
                    </td>
                    <td className="hidden sm:table-cell  p-1">
                      <Switch
                        checked={vendor.active}
                        onChange={() => handleToggleActive(vendor.id)}
                        sx={{ transform: "scale(1.5)" }}
                      />
                    </td>
                  </tr>
                  {openAccordion === vendor.id && (
                    <tr>
                      <td colSpan="7" className="p-1">
                        <Accordion
                          vendor={vendor}
                          handleShowAlert={handleShowAlert}
                          handleToggleActive={handleToggleActive}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg text-gray-400 mb-2 sm:mb-0">
              Showing {(page - 1) * show + 1} to{" "}
              {Math.min(page * show, filteredData.length)} of{" "}
              {filteredData.length} entries
            </p>
            <div className="flex justify-start sm:justify-end sm:ml-auto">
              <Pagging
                page={page}
                setPage={setPage}
                count={Math.ceil(filteredData.length / show)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// PropTypes validation
VendorsList.propTypes = {
  allVendorsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.string,
      documents: PropTypes.bool,
      active: PropTypes.bool,
      selected: PropTypes.bool,
    })
  ).isRequired,
};

export default VendorsList;
