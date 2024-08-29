import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const predefinedRanges = [
  { label: "Today", range: [new Date(), new Date()] },
  {
    label: "Yesterday",
    range: [
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() - 1)),
    ],
  },
  {
    label: "Last 7 Days",
    range: [new Date(new Date().setDate(new Date().getDate() - 7)), new Date()],
  },
  {
    label: "Last 30 Days",
    range: [
      new Date(new Date().setDate(new Date().getDate() - 30)),
      new Date(),
    ],
  },
  {
    label: "This Month",
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    ],
  },
  {
    label: "Last Month",
    range: [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0),
    ],
  },
];

const SalesReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isCustomRange, setIsCustomRange] = useState(false);

  const handleRangeChange = (range) => {
    setStartDate(range[0]);
    setEndDate(range[1]);
    setIsCustomRange(false);
  };

  return (
    <div className="p-4  bg-white border rounded  mx-5  flex flex-col justify-center items-center">
      <fieldset className="border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-4 py-5">
        <legend className="text-md font-semibold  bg-primary-900 text-white px-2 py-1 rounded">
          Sales Report
        </legend>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Select Restaurant
            </label>
            <select className="block w-full p-2 border bg-[#F5F5F5] border-gray-300 rounded">
              <option>All</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Select Driver
            </label>
            <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
              <option>All</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-2">
              Select User
            </label>
            <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
              <option>All</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-2">
              Select Category
            </label>
            <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
              <option>All</option>
            </select>
          </div>
        </div>

        <div className="relative mt-4">
          <label className="block text-sm font-semibold  mb-2">
            {" "}
            Select Date
          </label>

          <button
            className="flex justify-center items-center gap-3 text-gray-600 w-full p-2 border border-gray-300 rounded bg-white"
            onClick={() => setIsCustomRange(!isCustomRange)}
          >
            {" "}
            <FaCalendarAlt />
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </button>
          {isCustomRange && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded mt-2 ">
              {predefinedRanges.map((range, index) => (
                <button
                  key={index}
                  className="block w-full text-left p-2 hover:bg-blue-500"
                  onClick={() => handleRangeChange(range.range)}
                >
                  {range.label}
                </button>
              ))}
              <div className="p-2">
                <label className="block text-sm font-semibold  mb-2">
                  Custom Range
                </label>
                <div className="flex space-x-2">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                  {/* <span className="self-center">to</span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="block w-full p-2 border border-gray-300 rounded"
                  /> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold  mb-2">
            File Format
          </label>
          <select className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded">
            <option>File Format</option>
          </select>
        </div>
      </fieldset>
      <button className=" flex items-center gap-2 bg-primary-900 text-white px-4 py-2 rounded mt-4">
        <FaFileAlt /> Download
      </button>
    </div>
  );
};

export default SalesReport;
