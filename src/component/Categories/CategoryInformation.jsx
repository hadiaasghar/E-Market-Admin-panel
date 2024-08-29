
//validation done


import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFileInvoice } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';

const CategoryInformation = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Create Category
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className={`block w-full p-2 bg-[#F5F5F5] border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
                {...register('name', { required: 'Name is required' })}
              />
              <p className="text-gray-400 text-sm">Insert Name</p>
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea
                className={`block w-full bg-[#F5F5F5] p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded`}
                {...register('description', { required: 'Description is required' })}
              ></textarea>
              <p className="text-gray-400 text-sm">Insert Description</p>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">Image</label>
            <input
              type="file"
              className={`block w-full text-sm ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
              {...register('image', { required: 'Image is required' })}
            />
            <p className="text-gray-400 text-sm">Insert Image in SVG</p>
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
          </div>

          <div>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="h-4 w-4" {...register('publish')} />
              <label>Publish</label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="h-4 w-4" {...register('showInHomePage')} />
              <label>Show In HomePage?</label>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Maximum 5 categories will show in homepage
            </p>
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
  );
};

export default CategoryInformation;



