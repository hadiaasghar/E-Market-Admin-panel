//validation done

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
// import TitleHead from "../Header/TitleHead";

const CreateBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState("vendor");
  const [options, setOptions] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "vendor":
        setOptions(["Select Restaurant", "Vendor 1", "Vendor 2"]);
        break;
      case "product":
        setOptions(["Select Food", "Product 1", "Product 2"]);
        break;
      case "external":
        setOptions(["Select External Link", "Link 1", "Link 2"]);
        break;
      default:
        setOptions([]);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <>
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-11/12 lg:w-3/4">
        <fieldset className="border rounded-md border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Banner Items
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Title</label>
              <input
                type="text"
                {...register('title', { required: 'Title is required' })}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              <div className="flex items-center gap-2 pt-4">
                <input
                  type="checkbox"
                  {...register('isPublish')}
                  className="h-4 w-4"
                />
                <label>IS Publish</label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Set Order</label>
              <select
                {...register('order', { required: 'Set Order is required' })}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option value="">Select Order</option>
                <option value="1">1st Order</option>
                {/* Add options as needed */}
              </select>
              {errors.order && <p className="text-red-500 text-sm">{errors.order.message}</p>}
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold mb-2">Image</label>
              <input
                type="file"
                {...register('image', { required: 'Image is required' })}
                className=""
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Banner Position</label>
              <select
                id="dropdown"
                {...register('position', { required: 'Banner Position is required' })}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option value="">Select Position</option>
                <option value="top">Top</option>
                <option value="left">Left</option>
                {/* Add options as needed */}
              </select>
              {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
            </div>

            <div className="">
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="vendor"
                    {...register('category', { required: 'Category is required' })}
                    checked={selectedCategory === "vendor"}
                    onChange={() => handleCategoryChange("vendor")}
                    className="form-radio text-red-600"
                  />
                  <span className="ml-2 text-gray-700">Vendor</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="product"
                    {...register('category', { required: 'Category is required' })}
                    checked={selectedCategory === "product"}
                    onChange={() => handleCategoryChange("product")}
                    className="form-radio text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">Product</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    value="external"
                    {...register('category', { required: 'Category is required' })}
                    checked={selectedCategory === "external"}
                    onChange={() => handleCategoryChange("external")}
                    className="form-radio text-gray-600"
                  />
                  <span className="ml-2 text-gray-700">External Link</span>
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="dropdown" className="block text-gray-700">
                  {selectedCategory === "vendor"
                    ? "Vendor"
                    : selectedCategory === "product"
                    ? "Product"
                    : "External Link"}
                </label>
                <select
                  id="dropdown"
                  {...register('dropdown', { required: 'Selection is required' })}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-[#F5F5F5] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select {selectedCategory}</option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.dropdown && <p className="text-red-500 text-sm">{errors.dropdown.message}</p>}
              </div>
            </div>
          </div>
        </fieldset>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
          >
            <FaFileInvoice /> Save
          </button>
          <button 
            type="button" 
            className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
          >
            <FaArrowRotateLeft /> Back
          </button>
        </div>
      </form>
    </div>
    </>
    
  );
};

export default CreateBanner;
