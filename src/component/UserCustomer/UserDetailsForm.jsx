// import React from "react";
// import { FaSave, FaStepBackward } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import FormHead from "../Forms/FormHead";

// const UserDetailsForm = () => {
//   return (
//     <div>
//       <div className="flex flex-col gap-4 items-center justify-center rounded-lg border border-gray-300 mx-4 mt-16 w-[80%] mx-auto p-10">
//         <FormHead title="User"/>
//         <div className="flex w-full flex-row gap-4">
//           <div className="flex w-1/2 flex-col">
//             <p className="text-sm text-black">First Name</p>
//             <input
//               type="text"
//               placeholder="Insert First Name"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//             />
//           </div>
//           <div className="flex w-1/2 flex-col">
//             <p className="text-sm text-black">Last Name</p>
//             <input
//               type="text"
//               placeholder="Insert Last Name"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//             />
//           </div>
//         </div>

//         <div className="flex w-full flex-row gap-4">
//           <div className="flex w-1/2 flex-col">
//             <p className="text-sm text-black">Email</p>
//             <input
//               type="text"
//               placeholder="Enter your email"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//             />
//           </div>
//           <div className="flex w-1/2 flex-col">
//             <p className="text-sm text-black">Password</p>
//             <input
//               type="text"
//               placeholder="Enter Your password"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//             />
//           </div>
//         </div>
//         <div className="flex w-full flex-col">
//           <p className="text-sm text-black">Phone</p>
//           <input
//             type="text"
//             placeholder="Enter Your phone no.."
//             className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm text-black">Image</label>
//           <div className="mt-1">
//             <input
//               type="file"
//               className="block w-full text-sm border-gray-300 cursor-pointer mt-3 focus:outline-none focus:border-blue-500"
//             />
//           </div>
//         </div>
//       </div>

//       <div className=" flex flex-col gap-4 mt-10 justify-center rounded-lg border border-gray-300 mx-4 w-[80%] mx-auto p-10">
//         <FormHead title="User Activate/Deactivate<"/>
//         <div>
//           <div className="flex gap-2">
//             <input
//               type="checkbox"
//               className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-primary-900"
//             />
//             <label className="text-sm text-black">Active</label>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center gap-4 mt-4">
//         <button type="submit" className="flex items-center gap-2 bg-primary-900 text-white p-2 rounded-lg">
//           <FaSave />
//           Save
//         </button>
//         <button className="flex items-center gap-2 bg-primary-400 text-white p-2 rounded-lg">
//           <FaArrowRotateLeft />
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserDetailsForm;



import React from "react";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import FormHead from "../Forms/FormHead";

const UserDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      image: null,
      active: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 items-center justify-center rounded-lg border border-gray-300 mx-4 mt-16 w-[80%] mx-auto p-10">
          <FormHead title="User" />
          <div className="flex w-full flex-row gap-4">
            <div className="flex w-1/2 flex-col">
              <p className="text-sm text-black">First Name</p>
              <input
                type="text"
                placeholder="Insert First Name"
                {...register("firstName", { required: "First Name is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-sm text-black">Last Name</p>
              <input
                type="text"
                placeholder="Insert Last Name"
                {...register("lastName", { required: "Last Name is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="flex w-full flex-row gap-4">
            <div className="flex w-1/2 flex-col">
              <p className="text-sm text-black">Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="text-sm text-black">Password</p>
              <input
                type="password"
                placeholder="Enter Your password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <p className="text-sm text-black">Phone</p>
            <input
              type="text"
              placeholder="Enter Your phone no.."
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-black">Image</label>
            <div className="mt-1">
              <input
                type="file"
                {...register("image")}
                className="block w-full text-sm border-gray-300 cursor-pointer mt-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setValue('image', e.target.files[0])}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10 justify-center rounded-lg border border-gray-300 mx-4 w-[80%] mx-auto p-10">
          <FormHead title="User Activate/Deactivate" />
          <div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                {...register("active")}
                className="rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-primary-900"
              />
              <label className="text-sm text-black">Active</label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button type="submit" className="flex items-center gap-2 bg-primary-900 text-white p-2 rounded-lg">
            <FaSave />
            Save
          </button>
          <button type="button" className="flex items-center gap-2 bg-primary-400 text-white p-2 rounded-lg">
            <FaArrowLeft />
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsForm;
