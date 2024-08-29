import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { FaList } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { IoIosDocument, IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import AccordionAlldrivers from "./AccordionAlldrivers";
import Alert from "../Pagination/Alert";
import Pagging from "../Pagination/Pagging";
import ButtonHead from "../Header/ButtonHead";

const DriversList = ({
  driversData, // drivers data prop
  initialAlertMessage, // alert message prop
  initialShow = 10, // default value for show
}) => {
  const [show, setShow] = useState(initialShow);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [drivers, setDrivers] = useState(driversData);
  const [selectAll, setSelectAll] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(initialAlertMessage);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Event handlers
  const handleChange = (event) => setShow(event.target.value);

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleToggleOnline = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, online: !driver.online } : driver
      )
    );
  };

  const handleToggleActive = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, active: !driver.active } : driver
      )
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) => ({ ...driver, selected: newSelectAll }))
    );
  };

  const handleSelectOne = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, selected: !driver.selected } : driver
      )
    );
  };

  const handleShowAlert = (message) => {
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleCloseAlert = () => setAlertOpen(false);

  const handleToggleAccordion = (id) =>
    setOpenAccordion(openAccordion === id ? null : id);

  // Filtering and pagination
  const filteredData = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedData = filteredData.slice((page - 1) * show, page * show);

  return (
    <>
      {alertOpen && <Alert message={alertMessage} onClose={handleCloseAlert} />}

      {/* Header Section */}
      {/* <div className="bg-[#F7F7F7] border-2 w-full rounded-t-lg px-4">
        <div className="flex flex-col md:flex-row justify-center items-center my-3">
          <button className="bg-primary-900 text-white py-3 px-4 flex rounded whitespace-nowrap">
            <FaList className="mr-2 text-2xl" />
            Drivers List
          </button>
          <Link to="/Alldrivers-form">
            <button className="text-black text-2xl py-2 px-4 hover:bg-[#2680FA] flex rounded whitespace-nowrap">
              <IoMdAdd className="mt-1 text-2xl" />
              Create Driver
            </button>
          </Link>
        </div>
      </div> */}

        <ButtonHead tab1="Drivers List" tab2="Create Driver" link="/drivers/create"/>
      {/* Main Content */}
      <div className="bg-white mx-auto border-2 shadow-md w-full rounded-lg p-4">
        {/* Control Panel */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center w-full">
            <div className="flex flex-row items-center mb-2 sm:mb-0 sm:mr-4">
              <p className="text-gray-500 mr-2">Show</p>
              <select value={show} onChange={handleChange} className="">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <p className="text-gray-500">entries</p>
            </div>
            <div className="flex-1 flex justify-start lg:justify-end">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search"
                className="border-b-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-b-orange-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Drivers Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead className="border py-2 px-4">
              <tr>
                <th className=" flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <MdDeleteSweep
                    className="ml-2 text-2xl text-primary-900"
                    onClick={() =>
                      handleShowAlert(
                        "This is for demo, We cannot allow to update content"
                      )
                    }
                  />
                  <span
                    className="ml-2 text-primary-900"
                    onClick={() =>
                      handleShowAlert(
                        "This is for demo, We cannot allow to update content"
                      )
                    }
                  >
                    All
                  </span>
                </th>
                <th className="">Image</th>
                <th className="">Name</th>
                <th className="hidden sm:table-cell ">Email</th>
                <th className="hidden sm:table-cell ">Date</th>
                <th className="hidden sm:table-cell ">Documents</th>
                <th className="hidden sm:table-cell ">Online</th>
                <th className="hidden sm:table-cell ">Active</th>
              </tr>
            </thead>
            <tbody className="border border-gray-300">
              {displayedData.map((driver) => (
                <React.Fragment key={driver.id}>
                  <tr className="border-b border-gray-300 text-sm">
                    <td className="flex ml-2 mt-3 items-center gap-2">
                      <div
                        className={`cursor-pointer p-1 rounded-full ${
                          openAccordion === driver.id
                            ? "bg-red-500"
                            : "bg-primary-900"
                        }`}
                        onClick={() => handleToggleAccordion(driver.id)}
                      >
                        {openAccordion === driver.id ? (
                          <GrSubtractCircle className="text-white text-sm" />
                        ) : (
                          <IoMdAddCircleOutline className="text-white text-sm" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={driver.selected || false}
                        onChange={() => handleSelectOne(driver.id)}
                      />
                    </td>
                    <td className=" text-center">
                      <img
                        src={driver.image}
                        alt={driver.name}
                        className="w-12 h-10 p-2 rounded-lg inline-block"
                      />
                    </td>
                    <td className="text-primary-600">
                      <Link to="/driver/profile">
                      {driver.name}
                      </Link>
                      </td>
                    <td className="hidden sm:table-cell ">{driver.email}</td>
                    <td className="hidden sm:table-cell ">{driver.date}</td>
                    <td className="hidden sm:table-cell ">
                      {driver.documents ? (
                        <Link to="/document-list">
                          <IoIosDocument className="text-2xl text-primary-900" />
                        </Link>
                      ) : (
                        "No"
                      )}
                    </td>
                    <td className="hidden sm:table-cell ">
                      <Switch
                        checked={driver.online}
                        onChange={() => handleToggleOnline(driver.id)}
                      />
                    </td>
                    <td className="hidden sm:table-cell ">
                      <Switch
                        checked={driver.active}
                        onChange={() => handleToggleActive(driver.id)}
                      />
                    </td>
                  </tr>
                  {openAccordion === driver.id && (
                    <tr>
                      <td colSpan="9" className="border border-gray-300">
                        {/* <AccordionAlldrivers
                          handleShowAlert={handleShowAlert}
                          driver={driver}
                          handleToggleOnline={handleToggleOnline}
                          handleToggleActive={handleToggleActive}
                        /> */}
                        <AccordionAlldrivers
                          key={driver.id}
                          handleShowAlert={handleShowAlert}
                          driver={driver}
                          handleToggleOnline={handleToggleOnline}
                          handleToggleActive={handleToggleActive}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
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
      </div>
    </>
  );
};

// PropTypes validation
DriversList.propTypes = {
  driversData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.string,
      documents: PropTypes.bool,
      online: PropTypes.bool,
      active: PropTypes.bool,
      selected: PropTypes.bool,
    })
  ).isRequired,
  initialAlertMessage: PropTypes.string,
  initialShow: PropTypes.number,
};

export default DriversList;
