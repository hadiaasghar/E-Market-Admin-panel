import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { Select, MenuItem } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { useParams, Link } from 'react-router-dom';
import Alert from "../Pagination/Alert";
import Accordianrestraurant from "../Pagination/Accordianrestraurant";
import Pagging from "../Pagination/Pagging";
import ButtonHead from "../Header/ButtonHead";
import TitleHead from "../Header/TitleHead";



const RestaurantsList = ({ data }) => {
  const [show, setShow] = useState(10);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [vendors, setVendors] = useState(data);
  const [selectAll, setSelectAll] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleChange = (event) => {
    setShow(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setVendors(prevVendors =>
      prevVendors.map(vendor => ({ ...vendor, selected: newSelectAll }))
    );
  };

  const handleSelectOne = (id) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
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

  const filteredData = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedData = filteredData.slice((page - 1) * show, page * show);

  return (

    <>
      <TitleHead title="Restaurants" desc=" List of restaurants" />
      {alertOpen && <Alert message="This is for demo, We cannot allow to update content" onClose={handleCloseAlert} />}
      <ButtonHead tab1={"Restaurants List"} tab2={"Create Restaurant"} link={"/restaurant/create"} />
      <div className="bg-white mx-auto border-2 items-center shadow-md sm:ml-0 w-full rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0 sm:mr-4 w-full">
            <div className="flex flex-row items-center sm:mr-4 mb-2 sm:mb-0">
              <p className="text-gray-500 mr-2">Show</p>
              <select
                id="demo-simple-select"
                value={show}
                onChange={handleChange}
                className="mx-2"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
              <p className="text-gray-500">entries</p>
            </div>
            <div className="flex-1 flex justify-start lg:justify-end lg:mx-0 lg:w-full">
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
        {/* Scrollable Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 flex items-center cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" checked={selectAll} onChange={handleSelectAll} />
                  <MdDeleteSweep className="ml-2 text-2xl text-[#257FFF]" onClick={handleShowAlert} />
                  <span className="ml-2 " onClick={handleShowAlert}>All</span>
                </th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="hidden sm:table-cell border border-gray-300 p-2">Date</th>
                <th className="hidden sm:table-cell border border-gray-300 p-2">Wallet History</th>
                <th className="hidden sm:table-cell border border-gray-300 p-2">Foods</th>
                <th className="hidden sm:table-cell border border-gray-300 p-2">Orders</th>
              </tr>
            </thead>
            <tbody className="border border-gray-300">
              {displayedData.map(vendor => (
                <React.Fragment key={vendor.id}>
                  <tr className="border-b border-gray-300">
                    <td className="flex ml-2 mt-3 items-center gap-2">
                      <div
                        className={`cursor-pointer rounded-full ${openAccordion === vendor.id ? 'bg-secondary' : 'bg-primary-500'}`}
                        onClick={() => handleToggleAccordion(vendor.id)}
                      >
                        {openAccordion === vendor.id ? (
                          <GrSubtractCircle className="text-white text-md" />
                        ) : (
                          <IoMdAddCircleOutline className="text-white text-md" />
                        )}
                      </div>
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={vendor.selected || false}
                        onChange={() => handleSelectOne(vendor.id)}
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <img src={vendor.image} alt={vendor.name} className="w-12 h-8 rounded-lg inline-block" />
                    </td>
                    <td className="border border-gray-300 p-2">{vendor.name}</td>
                    <td className="border border-gray-300 p-2">{vendor.phone}</td>
                    <td className="hidden sm:table-cell border border-gray-300 p-2">{vendor.date}</td>
                    <td className="hidden sm:table-cell border border-gray-300 p-2">{vendor.walletHistory}</td>
                    <td className="hidden sm:table-cell border border-gray-300 p-2">{vendor.foods}</td>
                    <td className="hidden sm:table-cell border border-gray-300 p-2">{vendor.orders}</td>
                  </tr>
                  {/* Accordion for small screens */}
                  {openAccordion === vendor.id && (
                    <tr>
                      <td colSpan="8" className="">
                        <Accordianrestraurant
                          vendor={vendor}
                          handleShowAlert={handleShowAlert}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg text-gray-400 mb-2 sm:mb-0">
              Showing {((page - 1) * show) + 1} to {Math.min(page * show, filteredData.length)} of {filteredData.length} entries
            </p>
            <div className="flex justify-start sm:justify-end sm:ml-auto">
              <Pagging page={page} setPage={setPage} count={Math.ceil(filteredData.length / show)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantsList
