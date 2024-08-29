import { useState, useRef, useCallback } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Autocomplete,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";

import { FaHandPointUp, FaTrashAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Map from "../Map/Map";
import TitleHead from "../Header/TitleHead";


const CreateZone = () => {

  return (
    <>
    <TitleHead title={"Create Zone"} desc={"create zone"} link={"/zone"} desc2={"> zone"} />
      <div className="m-4 rounded-lg border shadow-lg flex flex-col items-center p-4">
        {" "}
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5 my-3">
          <legend className="text-sm font-semibold bg-primary-900 text-white px-2 py-1 rounded">
            <div className="flex items-center gap-1 ">
              {/* <IoIosSettings className="text-md" /> */}
              <h1 className="uppercase">Zone Edit</h1>
            </div>
          </legend>
          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="apiKey"
              >
                Zone Name
              </label>
              <input
                id="name"
                name="name"
                defaultValue={"Islambad"}
                type="text"
                className="shadow appearance-none border rounded w-full bg-white py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:outline-none mb-2"
              />
              <h1 className="text-sm text-gray-300">Add your zone name</h1>
            </div>
            <div className="flex items-center gap-4  col-span-2 md:col-span-1">
              <input type="checkbox" name="" id="offer" className="h-5 w-5" />
              <label htmlFor="offer">Status</label>
            </div>
          </div>
        </fieldset>
        <div className="grid grid-cols-7 gap-2 m-4">
          <div className="col-span-7 md:col-span-3 flex flex-col gap-3 ">
            <h1 className="text-sm md:text-[1.3rem]  text-gray-600">
              Instructions
            </h1>
            <p className="text-sm text-gray-500 md:text-[1.2rem] ">
              Allow users to define the boundary of the business zone
              interactively on the map by clicking to add points or dots.
            </p>
            <div className="flex items-start gap-2">
              <div className="px-2 py-1 bg-primary-900 rounded-sm">
                <FaHandPointUp className="text-white" />
              </div>
              <p className="text-sm text-gray-500 md:text-[1.2rem] ">
                Use the "Hand Tool" to drag the map and select your desired
                location
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="px-2 py-1 bg-primary-900 rounded-sm">
                <IoMdAddCircle className="text-white" />
              </div>
              <p className="text-sm text-gray-500 md:text-[1.2rem] ">
                Use the "Shape Tool" to highlight areas and connect the dots. A
                minimum of three points/dots is required.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="px-2 py-1 bg-primary-900 rounded-sm">
                <FaTrashAlt className="text-white" />
              </div>
              <p className="text-sm text-gray-500 md:text-[1.2rem]  ">
                Use the "Trash Tool" to remove the selected area.
              </p>
            </div>
            <img
              src="https://foodie.siswebapp.com/images/zone_info.gif"
              alt="zone"
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            {/* <Map /> */}
          </div>
          <div className="col-span-1 flex flex-col  items-start gap-4">
            <div className="px-2 py-1 bg-primary-900 rounded-sm">
              <FaHandPointUp className="text-white" />
            </div>

            <div className="px-2 py-1 bg-primary-900 rounded-sm">
              <FaTrashAlt className="text-white" />
            </div>
            <div className="px-2 py-1 bg-primary-900 rounded-sm">
              <IoMdAddCircle className="text-white" />
            </div>
          </div>
        </div>
        {/* <BottomButton /> */}
      </div>
    </>

  );
};

export default CreateZone;
