// import React, { useState } from "react";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import TitleHead from "../Header/TitleHead";

// const FoodDetails = () => {
//   const [fields, setFields] = useState([{ title: "", price: "" }]);
//   const [showFields, setShowFields] = useState(false);
//   const [specFields, setSpecFields] = useState([{ label: "", value: "" }]);
//   const [showField, setShowField] = useState(false);

//   // Function to toggle visibility of fields
//   const handleAddIconsClick = () => {
//     setShowFields((prevState) => !prevState);
//   };

//   // Function to toggle visibility of additional specifications
//   const handleAddSpecificationsClick = () => {
//     setShowField((prevState) => !prevState);
//   };

//   const handleFieldChange = (index, event) => {
//     const { name, value } = event.target;
//     const newFields = [...fields];
//     newFields[index][name] = value;
//     setFields(newFields);
//   };

//   const handleSaveIconsClick = () => {
//     // Perform any save logic here (e.g., sending data to the server)

//     // Add a new empty field
//     setFields([...fields, { title: "", price: "" }]);
//   };

//   const handleSpecFieldChange = (index, event) => {
//     const { name, value } = event.target;
//     const newSpecFields = [...specFields];
//     newSpecFields[index][name] = value;
//     setSpecFields(newSpecFields);
//   };

//   const handleSaveSpecificationsClick = () => {
//     // Perform any save logic here (e.g., sending data to the server)

//     // Add a new empty specification field
//     setSpecFields([...specFields, { label: "", value: "" }]);
//   };
//   return (
//     <>
//       <TitleHead
//         title="Foods"
//         desc="Food Detail"
//         desc2={"> Foods "}
//         link={"/foods"}
//       />
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Food Details
//           </legend>
//           <h1 className="text-primary-900 py-5 text-sm">
//             The price for the product includes the admin commission. For
//             instance, if the product is priced at $100 and the admin commission
//             is 10%, the effective price would be $110 for the customer, which
//             will apply automatically. Admin Commission: 15%
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
//             <div className="col-span-2 md:col-span-1 lg:col-span-1">
//               <label className="block text-sm font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Name</p>
//             </div>
//             <div className="col-span-2 md:col-span-1 lg:col-span-1">
//               <label className="block text-sm font-semibold mb-2">Price</label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div className="col-span-2 md:col-span-1 lg:col-span-1">
//               <label className="block text-sm font-semibold mb-2">
//                 Discount Price
//               </label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="text-gray-400 text-sm">Insert Discount Price</p>
//             </div>
//             <div className="col-span-2 md:col-span-1 lg:col-span-1">
//               <label className="block text-sm font-semibold mb-2">
//                 Restaurant
//               </label>
//               <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
//                 <option value="">Select Restaurant</option>
//               </select>
//               <p className="text-gray-400 text-sm">Insert Restaurant</p>
//             </div>
//             <div className="mb-4 col-span-2">
//               <label
//                 htmlFor="category"
//                 className="block text-sm font-semibold mb-2"
//               >
//                 Select Category
//               </label>
//               <select
//                 id="category"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               >
//                 <option>Select Category</option>
//               </select>
//             </div>
//             <div className="mb-4 col-span-2">
//               <label
//                 htmlFor="quantity"
//                 className="block text-sm font-semibold mb-2"
//               >
//                 Item Quantity
//               </label>
//               <input
//                 type="number"
//                 id="quantity"
//                 value="3"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//               <p className="mt-1 text-sm text-gray-500">For unlimited set -1</p>
//             </div>
//             <div className="mb-4 col-span-2">
//               <label
//                 htmlFor="attribute"
//                 className="block text-sm font-semibold mb-2"
//               >
//                 Food Attribute
//               </label>
//               <select
//                 id="attribute"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               >
//                 <option>Select Attribute</option>
//               </select>
//             </div>
//             <div className="mt-4 col-span-2">
//               <label className="block text-sm font-semibold mb-2">Image</label>
//               <input type="file" className="block w-full text-sm" />
//               <p className="text-gray-400 text-sm pt-5">Insert Image in SVG</p>
//             </div>
//             <div className="col-span-2 mt-4">
//               <label className="block text-sm font-semibold mb-2">
//                 Description
//               </label>
//               <textarea className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"></textarea>
//               <p className="text-gray-400 text-sm">Insert Description</p>
//             </div>
//           </div>

//           <div>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
//               <div className="flex items-center gap-2">
//                 <input type="checkbox" className="h-4 w-4" />
//                 <label>Publish</label>
//               </div>
//               <div className="flex items-center gap-2 mt-2 sm:mt-0">
//                 <input type="checkbox" className="h-4 w-4" />
//                 <label>Non Veg</label>
//               </div>
//               <div className="flex items-center gap-2 mt-2 sm:mt-0">
//                 <input type="checkbox" className="h-4 w-4" />
//                 <label>Takeaway Option</label>
//               </div>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Ingredient
//           </legend>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-semibold mb-2">
//                 Calories
//               </label>

//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold mb-2">Grams</label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold mb-2">Fat</label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold mb-2">
//                 Proteins
//               </label>
//               <input
//                 type="text"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         </fieldset>
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Add Addons
//           </legend>
//           <button
//             className="px-3 bg-primary-900 text-white py-2 rounded-md mb-3"
//             onClick={handleAddIconsClick}
//           >
//             Add Icons
//           </button>
//           {showFields && (
//             <>
//               {fields.map((field, index) => (
//                 <div
//                   key={index}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3"
//                 >
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Title
//                     </label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={field.title}
//                       onChange={(e) => handleFieldChange(index, e)}
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Price
//                     </label>
//                     <input
//                       type="text"
//                       name="price"
//                       value={field.price}
//                       onChange={(e) => handleFieldChange(index, e)}
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     />
//                   </div>
//                 </div>
//               ))}
//               <button
//                 className="px-3 bg-primary-900 text-white py-2 rounded-md mt-3"
//                 onClick={handleSaveIconsClick}
//               >
//                 Save Icons
//               </button>
//             </>
//           )}
//         </fieldset>

//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Add Food Specifications
//           </legend>
//           <button
//             className="px-3 bg-primary-900 text-white py-2 rounded-md mb-3"
//             onClick={handleAddSpecificationsClick}
//           >
//             Add Food Specifications
//           </button>
//           {showField && (
//             <>
//               {specFields.map((field, index) => (
//                 <div
//                   key={index}
//                   className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3"
//                 >
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Label
//                     </label>
//                     <input
//                       type="text"
//                       name="label"
//                       value={field.label}
//                       onChange={(e) => handleSpecFieldChange(index, e)}
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Value
//                     </label>
//                     <select
//                       name="value"
//                       value={field.value}
//                       onChange={(e) => handleSpecFieldChange(index, e)}
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     >
//                       <option value="">Select Value</option>
//                       {/* Add value options here */}
//                     </select>
//                   </div>
//                 </div>
//               ))}
//               <button
//                 className="px-3 bg-primary-900 text-white py-2 rounded-md mt-3"
//                 onClick={handleSaveSpecificationsClick}
//               >
//                 Save Food Specifications
//               </button>
//             </>
//           )}
//         </fieldset>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
//           <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base">
//             <FaFileInvoice /> Save
//           </button>
//           <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base">
//             <FaArrowRotateLeft /> Back
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodDetails;

//validation done

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import TitleHead from "../Header/TitleHead";

const FoodDetails = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields: iconFields, append: appendIconField } = useFieldArray({
    control,
    name: "icons",
  });
  const { fields: specFields, append: appendSpecField } = useFieldArray({
    control,
    name: "specifications",
  });

  const [showFields, setShowFields] = useState(false);
  const [showField, setShowField] = useState(false);

  // Function to toggle visibility of fields
  const handleAddIconsClick = () => {
    setShowFields((prevState) => !prevState);
  };

  // Function to toggle visibility of additional specifications
  const handleAddSpecificationsClick = () => {
    setShowField((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Perform save logic here (e.g., sending data to the server)
  };

  return (
    <>
      <TitleHead
        title="Foods"
        desc="Food Detail"
        desc2={"> Foods "}
        link={"/foods"}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Food Details
            </legend>
            <h1 className="text-primary-900 py-5 text-sm">
              The price for the product includes the admin commission. For
              instance, if the product is priced at $100 and the admin
              commission is 10%, the effective price would be $110 for the
              customer, which will apply automatically. Admin Commission: 15%
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
                <p className="text-gray-400 text-sm">Insert Name</p>
              </div>
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <label className="block text-sm font-semibold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  {...register("price", { required: "Price is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <label className="block text-sm font-semibold mb-2">
                  Discount Price
                </label>
                <input
                  type="text"
                  {...register("discountPrice")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                <p className="text-gray-400 text-sm">Insert Discount Price</p>
              </div>
              <div className="col-span-2 md:col-span-1 lg:col-span-1">
                <label className="block text-sm font-semibold mb-2">
                  Restaurant
                </label>
                <select
                  {...register("restaurant")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  <option value="">Select Restaurant</option>
                </select>
                <p className="text-gray-400 text-sm">Insert Restaurant</p>
              </div>
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold mb-2"
                >
                  Select Category
                </label>
                <select
                  id="category"
                  {...register("category")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  <option>Select Category</option>
                </select>
              </div>
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-semibold mb-2"
                >
                  Item Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  {...register("quantity", { valueAsNumber: true })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                <p className="mt-1 text-sm text-gray-500">
                  For unlimited set -1
                </p>
              </div>
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="attribute"
                  className="block text-sm font-semibold mb-2"
                >
                  Food Attribute
                </label>
                <select
                  id="attribute"
                  {...register("attribute")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  <option>Select Attribute</option>
                </select>
              </div>
              <div className="mt-4 col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  Image
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="block w-full text-sm"
                />
                <p className="text-gray-400 text-sm pt-5">
                  Insert Image in SVG
                </p>
              </div>
              <div className="col-span-2 mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
                ></textarea>
                <p className="text-gray-400 text-sm">Insert Description</p>
              </div>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("publish")}
                    className="h-4 w-4"
                  />
                  <label>Publish</label>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <input
                    type="checkbox"
                    {...register("nonVeg")}
                    className="h-4 w-4"
                  />
                  <label>Non Veg</label>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <input
                    type="checkbox"
                    {...register("takeawayOption")}
                    className="h-4 w-4"
                  />
                  <label>Takeaway Option</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Ingredient
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Calories
                </label>
                <input
                  type="text"
                  {...register("calories")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Grams
                </label>
                <input
                  type="text"
                  {...register("grams")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Fat</label>
                <input
                  type="text"
                  {...register("fat")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Carbs
                </label>
                <input
                  type="text"
                  {...register("carbs")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="border rounded-md w-full  md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Add Addons
            </legend>

            <button
              type="button"
              onClick={handleAddIconsClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {showFields ? "Add Addons" : "Add Addons"}
            </button>
            {showFields && (
              <div className="">
                {iconFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2 mb-2">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-semibold mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        {...register(`icons.${index}.title`)}
                        className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                        placeholder="Icon Title"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block text-sm font-semibold mb-2">
                        icon price
                      </label>
                      <input
                        type="text"
                        {...register(`icons.${index}.price`)}
                        className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                        placeholder="Icon Price"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => appendIconField({ title: "", price: "" })}
                  className="px-3 bg-primary-900 text-white py-2 rounded-md mt-3"
                >
                  save Icon
                </button>
              </div>
            )}
          </fieldset>

          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Add Food Specifications
            </legend>
            <button
              type="button"
              onClick={handleAddSpecificationsClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {showField
                ? "   Add Food Specifications"
                : "   Add Food Specifications"}
            </button>
            {showField && (
              <div>
                {specFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2 mb-2">
                    <div className="flex flex-col ">
                      <label className="block text-sm font-semibold mb-2">
                        Label
                      </label>
                      <input
                        type="text"
                        {...register(`specifications.${index}.label`)}
                        className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                        placeholder=""
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="block text-sm font-semibold mb-2">
                        Value
                      </label>
                      <input
                        type="text"
                        {...register(`specifications.${index}.value`)}
                        className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                        placeholder=""
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => appendSpecField({ label: "", value: "" })}
                  className="px-3 bg-primary-900 text-white py-2 rounded-md mt-3"
                >
                  Save Food Specification
                </button>
              </div>
            )}
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
      </form>
    </>
  );
};

export default FoodDetails;
