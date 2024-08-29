//done validation


import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-4 mx-auto">
      <fieldset className="p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5 mx-auto">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Profile Details
        </legend>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
              <h1 className="text-gray-400 text-sm">Insert Name </h1>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
              <h1 className="text-gray-400 text-sm">Insert Password </h1>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                id="confirm-password"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === document.getElementById("password").value ||
                    "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
              <h1 className="text-gray-400 text-sm">Confirm Password </h1>
            </div>
            <div className="col-span-1 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
              <h1 className="text-gray-400 text-sm">Insert Email </h1>
            </div>
            <div className="col-span-1 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <select
                className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.role ? "border-red-500" : ""
                }`}
                id="role"
                {...register("role", { required: "Role is required" })}
              >
                <option value="">Select Role</option>
                <option value="Super Administrator">Super Administrator</option>
                <option value="Administrator">Administrator</option>
                <option value="User">User</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2"
            >
              <FaFileInvoice /> Save
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2"
            >
              <FaArrowRotateLeft /> Back
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateAdmin;
