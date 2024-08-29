//validation done


import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import TitleHead from "../../Header/TitleHead";

const EditCoupans = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      code: "",
      discount: "",
      expiresAt: "",
      restaurant: "",
      isPublic: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      <TitleHead title={"Coupons"} desc={"Coupons"} />
      <div className="w-[80%] mx-auto flex-col items-center justify-center">
        <fieldset className="border rounded-md w-full border-gray-300 px-4 py-5">
          <legend className="text-sm font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Create Coupon
          </legend>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="code">
                  Code
                </label>
                <input
                  type="text"
                  id="code"
                  {...register('code', { required: 'Coupon code is required' })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${errors.code ? 'border-red-500' : ''}`}
                  placeholder="Insert Coupon Code"
                />
                {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
                <h1 className="text-sm text-gray-400">Insert Coupon Code</h1>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="discountType">
                  Discount Type
                </label>
                <select
                  id="discountType"
                  {...register('discountType', { required: 'Discount type is required' })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${errors.discountType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Discount Type</option>
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed</option>
                </select>
                {errors.discountType && <p className="text-red-500 text-sm">{errors.discountType.message}</p>}
                <h1 className="text-sm text-gray-400">Select Discount Type</h1>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="discount">
                  Discount
                </label>
                <input
                  type="number"
                  id="discount"
                  {...register('discount', { required: 'Discount amount is required' })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${errors.discount ? 'border-red-500' : ''}`}
                  placeholder="Insert Discount Amount"
                />
                {errors.discount && <p className="text-red-500 text-sm">{errors.discount.message}</p>}
                <h1 className="text-sm text-gray-400">Insert Discount Amount</h1>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="expiresAt">
                  Expires At
                </label>
                <input
                  type="date"
                  id="expiresAt"
                  {...register('expiresAt', { required: 'Expiration date is required' })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${errors.expiresAt ? 'border-red-500' : ''}`}
                />
                {errors.expiresAt && <p className="text-red-500 text-sm">{errors.expiresAt.message}</p>}
                <h1 className="text-sm text-gray-400">Insert Expires At</h1>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="restaurant">
                  Restaurant
                </label>
                <select
                  id="restaurant"
                  {...register('restaurant', { required: 'Restaurant selection is required' })}
                  className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${errors.restaurant ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a Restaurant</option>
                  <option value="Garden Bistro">Garden Bistro</option>
                  <option value="Ocean View">Ocean View</option>
                  <option value="City Diner">City Diner</option>
                </select>
                {errors.restaurant && <p className="text-red-500 text-sm">{errors.restaurant.message}</p>}
                <h1 className="text-sm text-gray-400">The coupon will apply to the selected restaurant</h1>
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <Controller
                    name="isPublic"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        {...field}
                        className="form-checkbox h-4 w-4 text-blue-500"
                      />
                    )}
                  />
                  <span className="ml-2">Public</span>
                </label>
              </div>

              <div className="mb-4 col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register('description')}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  placeholder="Insert Description"
                >
                  Buy 1 Get 1 Free on All Pastries!
                </textarea>
                <h1 className="text-sm text-gray-400">Insert Description</h1>
              </div>

              <div className="mb-4 col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="image">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  {...register('image')}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center">
                  <Controller
                    name="isEnabled"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        {...field}
                        className="form-checkbox h-4 w-4 text-blue-500"
                      />
                    )}
                  />
                  <span className="ml-2">Enabled</span>
                </label>
              </div>
            </div>

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
        </fieldset>
      </div>
    </>
  );
};

export default EditCoupans;
