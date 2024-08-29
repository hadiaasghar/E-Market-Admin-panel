import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import TitleHead from "../Header/TitleHead";

const RestaurantPayOutDetails = () => {
  return (
    <>
    <TitleHead title="Create Restaurants Payout" desc="Create Restaurants Payout" desc2={"> Payouts "} link={'/payments/restaurant-payouts'}/>
    <div className="rounded shadow-lg flex flex-col items-center">
      <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
        <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
          Create Restaurants Payout
        </legend>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Restaurant Name
            </label>
            <select
              type="text"
              className="block w-full p-2  border border-gray-300 rounded"
            >
              <option value=""> Restaurant Name</option>
            </select>
            <h1 className="text-sm text-gray-400">Insert Restaurant Name</h1>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Amount</label>
            <select
              type="text"
              className="block w-full p-2  border border-gray-300 rounded"
            ></select>
            <h1 className="text-sm text-gray-400">Insert Amount</h1>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Note</label>
            <textarea className="block w-full  p-2 border border-gray-300 rounded"></textarea>
          </div>
        </div>
      </fieldset>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
        <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base">
          <FaFileInvoice /> Save
        </button>
        <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base">
          <FaArrowRotateLeft /> Back
        </button>
      </div>
    </div>
    </>
    
  );
};

export default RestaurantPayOutDetails;
